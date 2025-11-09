import { useState, useEffect, useCallback, useRef } from "react";
import {
  Room,
  RoomEvent,
  Track,
  RemoteTrackPublication,
  RemoteParticipant,
  ConnectionState,
} from "livekit-client";

interface UseLiveKitOptions {
  tokenServerUrl?: string;
  onError?: (error: Error) => void;
  onConnected?: () => void;
  onDisconnected?: () => void;
}

interface LiveKitState {
  isConnecting: boolean;
  isConnected: boolean;
  error: Error | null;
  room: Room | null;
  isMuted: boolean;
}

export const useLiveKit = ({
  tokenServerUrl = "http://localhost:3000/get-token",
  onError,
  onConnected,
  onDisconnected,
}: UseLiveKitOptions = {}) => {
  const [state, setState] = useState<LiveKitState>({
    isConnecting: false,
    isConnected: false,
    error: null,
    room: null,
    isMuted: false,
  });

  const roomRef = useRef<Room | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Fetch token from server
  const fetchToken = useCallback(async () => {
    try {
      const response = await fetch(tokenServerUrl);
      if (!response.ok) {
        throw new Error(`Token server error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Failed to fetch token: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }, [tokenServerUrl]);

  // Connect to LiveKit room
  const connect = useCallback(async () => {
    if (state.isConnecting || state.isConnected) {
      console.log("Already connecting or connected");
      return;
    }

    setState((prev) => ({ ...prev, isConnecting: true, error: null }));

    try {
      // Create room instance
      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
        videoCaptureDefaults: {
          resolution: {
            width: 1280,
            height: 720,
          },
        },
      });

      roomRef.current = room;

      // Set up room event listeners
      room
        .on(RoomEvent.Connected, () => {
          console.log("Connected to LiveKit room");
          setState((prev) => ({
            ...prev,
            isConnected: true,
            isConnecting: false,
            room,
          }));
          onConnected?.();
        })
        .on(RoomEvent.Disconnected, () => {
          console.log("Disconnected from LiveKit room");
          setState((prev) => ({
            ...prev,
            isConnected: false,
            isConnecting: false,
            room: null,
          }));
          onDisconnected?.();
        })
        .on(RoomEvent.TrackSubscribed, handleTrackSubscribed)
        .on(RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed)
        .on(
          RoomEvent.ConnectionStateChanged,
          (connectionState: ConnectionState) => {
            console.log("Connection state changed:", connectionState);
          }
        );

      // Fetch token from server
      const tokenData = await fetchToken();
      console.log("Token received:", {
        url: tokenData.url,
        room: tokenData.room_name,
      });

      // Connect to room
      await room.connect(tokenData.url, tokenData.token);

      // Enable microphone
      await room.localParticipant.setMicrophoneEnabled(true);

      console.log("Microphone enabled");
    } catch (error) {
      const err =
        error instanceof Error ? error : new Error("Connection failed");
      console.error("LiveKit connection error:", err);
      setState((prev) => ({
        ...prev,
        isConnecting: false,
        isConnected: false,
        error: err,
      }));
      onError?.(err);

      // Cleanup on error
      if (roomRef.current) {
        await roomRef.current.disconnect();
        roomRef.current = null;
      }
    }
  }, [state.isConnecting, state.isConnected, fetchToken, onConnected, onDisconnected, onError]);

  // Handle remote audio track subscription
  const handleTrackSubscribed = useCallback(
    (
      track: any,
      publication: RemoteTrackPublication,
      participant: RemoteParticipant
    ) => {
      console.log("Track subscribed:", {
        kind: track.kind,
        participant: participant.identity,
      });

      if (track.kind === Track.Kind.Audio) {
        // Create or reuse audio element
        if (!audioElementRef.current) {
          audioElementRef.current = document.createElement("audio");
          audioElementRef.current.autoplay = true;
          document.body.appendChild(audioElementRef.current);
        }

        // Attach track to audio element
        track.attach(audioElementRef.current);
        console.log("Audio track attached to element");
      }
    },
    []
  );

  // Handle track unsubscription
  const handleTrackUnsubscribed = useCallback((track: any) => {
    console.log("Track unsubscribed:", track.kind);
    if (track.kind === Track.Kind.Audio && audioElementRef.current) {
      track.detach(audioElementRef.current);
    }
  }, []);

  // Disconnect from room
  const disconnect = useCallback(async () => {
    if (roomRef.current) {
      await roomRef.current.disconnect();
      roomRef.current = null;
    }

    // Cleanup audio element
    if (audioElementRef.current) {
      audioElementRef.current.remove();
      audioElementRef.current = null;
    }

    setState({
      isConnecting: false,
      isConnected: false,
      error: null,
      room: null,
      isMuted: false,
    });
  }, []);

  // Toggle mute
  const toggleMute = useCallback(async () => {
    if (roomRef.current && state.isConnected) {
      const newMutedState = !state.isMuted;
      await roomRef.current.localParticipant.setMicrophoneEnabled(
        !newMutedState
      );
      setState((prev) => ({ ...prev, isMuted: newMutedState }));
      console.log("Microphone", newMutedState ? "muted" : "unmuted");
    }
  }, [state.isConnected, state.isMuted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (roomRef.current) {
        roomRef.current.disconnect();
      }
      if (audioElementRef.current) {
        audioElementRef.current.remove();
      }
    };
  }, []);

  return {
    ...state,
    connect,
    disconnect,
    toggleMute,
  };
};
