"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Play,
  Blocks,
  Brain,
  Users,
  Target,
  Zap,
  BookOpen,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  videoUrl: string;
  badge?: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    id: "dsa-practice",
    title: "DSA Practice Problems",
    description:
      "Master data structures and algorithms with our curated collection of 500+ problems, from basic to advanced levels. Each problem is carefully selected to build your problem-solving skills systematically.",
    icon: <Blocks className="w-8 h-8" />,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
    badge: "Most Popular",
    benefits: [
      "Progressive difficulty levels",
      "Detailed solutions",
      "Performance tracking",
      "Topic-wise organization",
    ],
  },
  {
    id: "lifetime-validity",
    title: "Lifetime Validity",
    description:
      "Get lifetime access to all the resources and features. You can access them anytime, anywhere.",
    icon: <Brain className="w-8 h-8" />,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    benefits: [
      "Real-world case studies",
      "Scalability principles",
      "Architecture patterns",
      "Trade-off analysis",
    ],
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    description:
      "Practice with industry experts through realistic mock interviews that simulate actual tech company interviews. Get personalized feedback to improve your performance.",
    icon: <Users className="w-8 h-8" />,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    benefits: [
      "Expert interviewers",
      "Real-time feedback",
      "Performance analytics",
      "Interview strategies",
    ],
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed analytics and personalized recommendations. Track your strengths and identify areas for improvement with data-driven insights.",
    icon: <Target className="w-8 h-8" />,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
    benefits: [
      "Detailed analytics",
      "Weakness identification",
      "Study recommendations",
      "Goal setting",
    ],
  },
  {
    id: "live-sessions",
    title: "Live Learning Sessions",
    description:
      "Join interactive live sessions with industry experts and fellow learners. Ask questions in real-time and learn from the community's collective knowledge.",
    icon: <Zap className="w-8 h-8" />,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
    benefits: [
      "Interactive learning",
      "Real-time Q&A",
      "Expert insights",
      "Community engagement",
    ],
  },
  {
    id: "study-materials",
    title: "Comprehensive Study Materials",
    description:
      "Access well-structured study materials, cheat sheets, and reference guides. Everything you need to succeed, organized for maximum learning efficiency.",
    icon: <BookOpen className="w-8 h-8" />,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6",
    benefits: [
      "Structured content",
      "Quick references",
      "Visual learning",
      "Updated regularly",
    ],
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [paused]);

  // Pause auto-advance briefly after manual selection
  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 7000);
  };

  const activeFeature = features[activeIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you
            need to master DSA and system design, with proven results and expert
            guidance every step of the way.
          </p>
        </motion.div>

        {/* Dot Tracker */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-3">
            {features.map((feature, idx) => (
              <button
                key={feature.id}
                aria-label={`Go to ${feature.title}`}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60
                  ${
                    activeIndex === idx
                      ? "bg-primary border-primary shadow"
                      : "bg-muted border-border hover:border-primary/60"
                  }`}
                onClick={() => handleDotClick(idx)}
                tabIndex={0}
              />
            ))}
          </div>
        </div>

        {/* Card Swap Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[480px]">
          {/* Left: Feature Info */}
          <motion.div
            key={activeFeature.id + "-info"}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Icon and Badge */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {activeFeature.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {activeFeature.title}
              </h3>
            </div>
            {/* Title and Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeFeature.description}
              </p>
            </div>
            {/* Benefits */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Key Benefits:
              </h4>
              <div className="grid gap-3">
                {activeFeature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA Button */}
            <Button
              size="lg"
              className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform ease-in-out duration-300" />
            </Button>
          </motion.div>

          {/* Right: Card Swap Animation for Video Preview */}
          <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeFeature.id + "-video"}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.96 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 border border-border/30 shadow-2xl group w-full h-full flex items-center justify-center">
                  <iframe
                    src={activeFeature.videoUrl}
                    title={`${activeFeature.title} Demo`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* Overlay with play button */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-white/95 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-primary fill-current" />
                    </motion.div>
                  </div>
                  {/* Floating elements for visual appeal */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full blur-xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-32"
        >
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 mb-8 max-w-7xl mx-auto">
            <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0" />
            <span className="text-lg font-medium text-foreground text-center">
              Join 50,000+ developers who have already mastered DSA & System Design
            </span>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 whitespace-nowrap"
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
