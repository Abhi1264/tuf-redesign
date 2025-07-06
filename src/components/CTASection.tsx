"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-8 px-4 py-2 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm">
            <Star className="w-3 h-3 mr-2" />
            Join 50,000+ Developers
          </Badge>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to Transform
          <br />
          <span className="text-primary">Your Career?</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Join thousands of developers who have already cracked their dream companies. 
          Start your journey today with our comprehensive learning platform.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-10 py-6 border-2 hover:bg-muted/50 font-semibold"
          >
            Explore More
          </Button>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-3 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Users className="w-5 h-5 text-primary" />
            <span className="font-medium">50K+ Active Students</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-3 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-5 h-5 text-primary" />
            <span className="font-medium">4.9/5 Rating</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-3 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">Lifetime Access</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
