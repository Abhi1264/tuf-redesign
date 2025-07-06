"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Target, Star, Clock, Quote, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    icon: Globe,
    company: "Google",
    position: "Software Engineer",
    quote:
      "TakeUForward Plus helped me crack Google's interview. The structured approach and practice problems were exactly what I needed.",
    duration: "3 months preparation",
    salary: "$180K+",
    avatar: "👨‍💻"
  },
  {
    icon: Target,
    company: "Microsoft",
    position: "Senior Developer",
    quote:
      "The system design course was comprehensive and practical. I felt confident during the interview process.",
    duration: "4 months preparation",
    salary: "$160K+",
    avatar: "👩‍💻"
  },
  {
    icon: Star,
    company: "Amazon",
    position: "SDE II",
    quote:
      "Mock interviews were game-changing. The feedback helped me improve my communication skills significantly.",
    duration: "2 months preparation",
    salary: "$170K+",
    avatar: "👨‍💻"
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="success-stories">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
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
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border border-border/50 bg-background/80 backdrop-blur-sm">
              <TrendingUp className="w-3 h-3 mr-2" />
              Success Stories
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real Results from
            <br />
            <span className="text-primary">Our Community</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of developers who have successfully landed their dream jobs 
            at top tech companies through our platform.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-primary/10 transition-colors duration-300"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Quote icon */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Quote className="w-8 h-8 text-primary/30" />
                  </motion.div>
                  
                  {/* Testimonial content */}
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </motion.p>
                  
                  {/* Author info */}
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.company}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary border-0">
                      {testimonial.salary}
                    </Badge>
                  </motion.div>
                  
                  {/* Duration */}
                  <motion.div 
                    className="flex items-center text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {testimonial.duration}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "95%", label: "Success Rate" },
              { value: "$150K+", label: "Avg. Salary" },
              { value: "3.2", label: "Avg. Months" },
              { value: "50+", label: "Companies" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
