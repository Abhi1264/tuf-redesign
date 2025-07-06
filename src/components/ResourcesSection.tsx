"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Blocks,
  BookOpen,
  Zap,
  Award,
  CheckCircle,
  Building,
  Network,
  Database,
  Monitor,
  Layers,
  Brain,
  TestTube,
  BarChart2,
  Type,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

type Resource = {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
};

type ResourceCategory = {
  [key: string]: Resource[];
};

const resourceData: ResourceCategory = {
  Premium: [
    {
      icon: Building,
      title: "Premium Content",
      description:
        "Access exclusive problems, company tags, and advanced analytics.",
      highlight: "1000+ Problems",
    },
  ],
  DSA: [
    {
      icon: Blocks,
      title: "DSA",
      description:
        "Master Data Structures & Algorithms with 500+ handpicked problems, in-depth solutions, and real interview questions from top tech companies.",
      highlight: "500+ Qs • SDE Sheet • GFG Solutions",
    },
    {
      icon: BookOpen,
      title: "DSA (Concept Revision)",
      description:
        "Quickly revise all essential DSA concepts with concise notes, visual explanations, and topic-wise breakdowns to boost your confidence before interviews.",
      highlight: "60+ Topics • 10+ Sheets",
    },
    {
      icon: Zap,
      title: "DSA (Quick Review)",
      description:
        "Speed through last-minute prep with our rapid DSA review—covering must-know patterns, formulas, and shortcuts for acing coding rounds.",
      highlight: "30+ Key Topics",
    },
  ],
  "CS Fundamentals": [
    {
      icon: Network,
      title: "Computer Networks",
      description:
        "Master networking essentials with a clear, structured roadmap. Build strong fundamentals and test your knowledge after every module.",
      highlight: "10+ Modules",
    },
    {
      icon: Database,
      title: "DBMS",
      description:
        "Deep-dive into databases with organized modules and practical insights. Grasp every key concept with 100+ focused chapters.",
      highlight: "14+ Modules",
    },
    {
      icon: Monitor,
      title: "Operating System",
      description:
        "Unlock OS concepts with easy-to-follow modules. Learn everything you need for interviews, from basics to advanced topics.",
      highlight: "9+ Modules",
    },
  ],
  "System Design": [
    {
      icon: Layers,
      title: "Low Level Design (LLD)",
      description: "Master LLD with hands-on projects, real-world case studies, and step-by-step video walkthroughs.",
      highlight: "13+ Topics",
    },
    {
      icon: Brain,
      title: "OOPS",
      description: "Solidify your OOPS concepts with practical examples and interview-focused explanations.",
      highlight: "6+ Topics",
    },
  ],
  Aptitude: [
    {
      icon: Brain,
      title: "Logical Reasoning",
      description:
        "Sharpen your analytical thinking with a variety of puzzles, patterns, and logic-based challenges. Perfect for acing aptitude rounds and boosting problem-solving speed.",
      highlight: "12+ Topics • 200+ Problems",
    },
    {
      icon: TestTube,
      title: "Mock Test",
      description:
        "Simulate real exam conditions with full-length mock tests. Track your progress, identify strengths, and target areas for improvement with instant feedback.",
      highlight: "10 Tests • 2,000+ Questions",
    },
    {
      icon: BarChart2,
      title: "Quantitative Aptitude",
      description:
        "Master quantitative skills with comprehensive coverage of arithmetic, algebra, geometry, and data interpretation. Ideal for campus placements and competitive exams.",
      highlight: "25+ Topics • 1,000+ Problems",
    },
    {
      icon: Type,
      title: "Verbal Ability",
      description:
        "Enhance your command over English with topic-wise practice on grammar, comprehension, and vocabulary. Build confidence for interviews and written assessments.",
      highlight: "8+ Topics • 500+ Questions",
    },
  ],
};

const tabList = [
  { key: "Premium", label: "Premium" },
  { key: "DSA", label: "DSA" },
  { key: "CS Fundamentals", label: "Core Subjects" },
  { key: "System Design", label: "System Design" },
  { key: "Aptitude", label: "Aptitude" },
];

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<string>("DSA");
  const features: Resource[] = resourceData[activeTab] || [];

  return (
    <section
      id="resources"
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm"
            >
              <Award className="w-3 h-3 mr-2" />
              Premium Resources
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything You Need to
            <br />
            <span className="text-primary">Crack Interviews</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive learning resources designed by industry experts to
            help you master DSA, System Design, and more with confidence.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex justify-center gap-2 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {tabList.map((tab, index) => (
            <motion.button
              key={tab.key}
              className={`px-6 py-2 rounded-full font-semibold transition-all border border-border/40 backdrop-blur-sm text-base focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm
                ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-lg border-primary"
                    : "bg-background/80 text-foreground hover:bg-primary/10"
                }
              `}
              onClick={() => setActiveTab(tab.key)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              {tab.key === "Premium" ||
              tab.key === "System Design" ||
              tab.key === "Aptitude" ? (
                <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full align-middle">
                  New
                </span>
              ) : null}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {features.length === 0
              ? Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Skeleton className="h-64 w-full rounded-2xl" />
                  </motion.div>
                ))
              : features.map((feature: Resource, index: number) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card
                      className="group relative overflow-hidden border border-border/40 bg-gradient-to-br from-background/90 to-muted/60 backdrop-blur-lg hover:border-primary/60 transition-all duration-300 hover:shadow-2xl rounded-2xl shadow-md"
                      style={{ minHeight: 260 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <CardHeader className="relative z-10 p-8">
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shadow-sm"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <feature.icon className="w-7 h-7 text-primary" />
                          </motion.div>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-background/80 border border-border/50"
                          >
                            {feature.highlight}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-semibold mb-3 text-foreground">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </CardDescription>
                        <motion.div 
                          className="mt-6 flex items-center text-sm text-primary font-medium cursor-pointer group-hover:underline"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          View Syllabus
                        </motion.div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
