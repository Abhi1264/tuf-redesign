"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Column - Text Content */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
              >
                <Star className="w-3 h-3 fill-current text-yellow-500" />
                Trusted by 50,000+ developers worldwide
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight">
                Master DSA &
                <br />
                <span className="bg-gradient-to-b from-primary to-primary/80 bg-clip-text text-transparent">
                  System Design
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crack top tech companies with our proven learning platform.
                <span className="text-foreground font-medium">
                  {" "}
                  95% success rate
                </span>{" "}
                with
                <span className="text-foreground font-medium">
                  {" "}
                  500+ practice problems
                </span>{" "}
                and
                <span className="text-foreground font-medium">
                  {" "}
                  expert mentorship
                </span>
                .
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform ease-in-out duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border hover:bg-muted/50 font-semibold group transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-primary/20 rounded-full border-2 border-background"></div>
                    <div className="w-6 h-6 bg-secondary/20 rounded-full border-2 border-background"></div>
                    <div className="w-6 h-6 bg-accent/20 rounded-full border-2 border-background"></div>
                  </div>
                  <span>Join 2.5k+ active learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div 
                className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border hover:bg-card/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  50K+
                </div>
                <div className="text-muted-foreground font-medium text-sm">
                  Active Students
                </div>
              </motion.div>
              <motion.div 
                className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border hover:bg-card/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  95%
                </div>
                <div className="text-muted-foreground font-medium text-sm">
                  Success Rate
                </div>
              </motion.div>
              <motion.div 
                className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border hover:bg-card/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-muted-foreground font-medium text-sm">
                  Practice Problems
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg lg:max-w-3xl">
              {/* Main hero image */}
              <motion.div 
                className="relative -z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/hero-pc.png"
                  alt="Hero illustration showing coding and system design concepts"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl transition-all duration-1000"
                  priority
                  draggable={false}
                />
              </motion.div>

              {/* Floating badges - repositioned to be visible */}
              <motion.div 
                className="absolute -top-0 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl animate-pulse"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm font-semibold text-foreground">
                    Live Session
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Join 2.5k+ students
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -right-0 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="text-sm font-semibold text-foreground">
                    Code Review
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Expert feedback
                </div>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                className="absolute top-1/2 -right-4 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-3 shadow-xl animate-pulse"
                style={{ animationDelay: "2s" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="text-xs font-semibold text-foreground">
                    Mock Interview
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
