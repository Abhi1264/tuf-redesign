"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-background/70 backdrop-blur-md z-50 flex items-center justify-between py-3 px-6 lg:px-8 mx-auto rounded-full border border-border/50 shadow-lg w-9/10 lg:${
        isScrolled ? "w-9/10 max-w-4xl" : "w-full max-w-7xl"
      }`}
      animate={{
        width: isScrolled ? "90%" : "100%",
        maxWidth: isScrolled ? "56rem" : "80rem",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center p-1">
            <Image
              src="/logo.png"
              alt="TakeUForward Plus Logo"
              width={32}
              height={32}
            />
          </div>
          <h2 className="text-base font-bold text-foreground">
            TakeUForward Plus
          </h2>
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        <a
          href="#resources"
          className="text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          Resources
        </a>
        <a
          href="#pricing"
          className="text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          Pricing
        </a>
        <a
          href="#success-stories"
          className="text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          Success Stories
        </a>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="border-2 hover:bg-muted/50 font-medium"
        >
          Sign In
        </Button>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Get Started
        </Button>
        <ThemeToggle />
      </div>

      <div className="lg:hidden flex items-center space-x-3">
        <ThemeToggle />

        <Button
          variant="outline"
          size="sm"
          className="border-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg lg:hidden transition-all duration-300 ease-in-out transform-origin-top mt-2 mx-2 ${
          isMobileMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#success-stories"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Success Stories
          </a>
          <div className="flex flex-col space-y-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              className="border-2 hover:bg-muted/50 font-medium w-fit px-8"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-fit"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
