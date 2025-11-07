import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <nav className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <motion.div
              className="flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Black & White Logo Bars */}
              <div className="w-2 h-6 bg-black dark:bg-white rounded" />
              <div className="w-2 h-6 bg-neutral-500 dark:bg-neutral-300 rounded" />
              <div className="w-2 h-6 bg-neutral-300 dark:bg-neutral-500 rounded" />
            </motion.div>

            <Link
              to="/"
              className="text-xl font-bold ml-2 hover:opacity-90 text-foreground"
            >
              Lena
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              to="/company"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              Company
            </Link>
            <Link
              to="/agents"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              Agents
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 shadow-sm">
              Talk to Lena
            </Button>

            {/* Mobile Menu */}
            <button className="lg:hidden">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
