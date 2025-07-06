"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Calendar, Zap, Rocket, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Sprint Plan",
    icon: Zap,
    description: "Perfect for beginners starting their coding journey.",
    originalPrice: "₹ 8999",
    regularPrice: "₹ 6599",
    offerPrice: "₹ 4289.35",
    offerPercent: "27% OFF",
    coupon: "PAYDAY",
    validity: "12 Months",
    features: [
      { label: "All features", included: true },
      { label: "Only DSA, Core & Aptitude", included: true },
      { label: "AI Doubt Support", included: false },
      { label: "Biweekly Sessions", included: false },
      { label: "Code Review", included: false },
    ],
    buttonText: "Buy Now @ ₹4289.35",
    buttonVariant: "outline" as const,
    highlight: false,
    cardStyle: "bg-card text-card-foreground",
    offerStyle:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    priceText: "Offer Price:",
    showOffer: true,
    showContact: false,
  },
  {
    name: "Pinnacle Plan",
    icon: Rocket,
    description: "Go all in — with expert support & lifetime access.",
    originalPrice: "₹ 11999",
    regularPrice: "₹ 9120",
    offerPrice: "₹ 5928",
    offerPercent: "24% OFF",
    coupon: "PAYDAY",
    validity: "Lifetime",
    features: [
      { label: "All features", included: true },
      { label: "DSA, Core, Design & Aptitude", included: true },
      { label: "AI Doubt Support", included: true },
      { label: "Biweekly Sessions", included: true },
      { label: "Code Review", included: true },
    ],
    buttonText: "Buy Now @ ₹5928",
    buttonVariant: "default" as const,
    highlight: true,
    cardStyle: "bg-card text-card-foreground border-0 shadow-2xl",
    offerStyle:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    priceText: "Offer Price:",
    showOffer: true,
    showContact: false,
    badge: "Lifetime Validity",
  },
  {
    name: "Enterprise Plan",
    icon: Building2,
    description:
      "Perfect for a group of people (minimum 30) who are looking for an extra discount.",
    originalPrice: null,
    regularPrice: null,
    offerPrice: null,
    offerPercent: null,
    coupon: null,
    validity: null,
    features: [
      { label: "All features of Pinnacle", included: true },
      { label: "Performance Dashboard", included: true },
      { label: "Centralized Billing & Licensing", included: true },
      { label: "Custom Curriculum", included: true },
      { label: "Exclusive Webinars & Industry Events", included: true },
      { label: "Batch Enrollment & Role Access", included: true },
    ],
    buttonText: "Contact Us",
    buttonVariant: "default" as const,
    highlight: false,
    cardStyle: "bg-card text-card-foreground",
    offerStyle: "",
    priceText: null,
    showOffer: false,
    showContact: true,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-muted/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Choose Your
            <br />
            <span className="text-primary">Learning Path</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Start your journey to success with our flexible pricing options
            designed for every stage of your learning journey.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="flex h-full justify-center"
            >
              <Card
                className={`relative group overflow-hidden border border-border transition-all duration-300 flex flex-col h-full ${
                  plan.cardStyle
                } ${
                  plan.highlight
                    ? "scale-105 z-10 border-2 border-primary shadow-xl"
                    : "hover:shadow-lg"
                } px-3 py-4 md:px-4 md:py-6 w-full max-w-xs`}
                style={{ minHeight: 0 }}
              >
                {/* Top Badge for Pinnacle */}
                {plan.badge && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 text-sm rounded shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                {/* Offer percent badge */}
                {plan.offerPercent && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-green-100 text-green-700 border-0"
                    >
                      {plan.offerPercent}
                    </Badge>
                  </div>
                )}
                <CardHeader className={`text-center pb-4 ${plan.badge ? 'pt-4' : ''}`}>
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
                      {React.createElement(plan.icon, { className: "w-6 h-6 text-primary" })}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1 text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  {/* Pricing Section */}
                  {plan.showOffer && (
                    <div
                      className={`mt-4 rounded-lg px-2 py-3 text-left ${plan.offerStyle} flex flex-col items-start gap-1`}
                    >
                      <div className="flex gap-2 items-center w-full">
                        <span className="text-sm line-through opacity-60">
                          {plan.originalPrice}
                        </span>
                        <span className="text-sm opacity-80">
                          {plan.regularPrice}
                        </span>
                        {plan.offerPercent && (
                          <span className="ml-2 text-xs font-semibold bg-green-200 text-green-800 px-1.5 py-0.5 rounded">
                            {plan.offerPercent}
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold">
                        {plan.priceText}{" "}
                        <span className="text-lg font-bold">
                          {plan.offerPrice}
                        </span>
                      </div>
                      <div className="text-sm whitespace-nowrap">
                        Coupon: <span className="font-bold">{plan.coupon}</span>
                      </div>
                    </div>
                  )}
                  {/* Validity */}
                  {plan.validity && (
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Validity: {plan.validity}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="text-left">
                    <div className="font-semibold mb-1 text-base">
                      What&apos;s included
                    </div>
                    <ul className="space-y-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          {feature.included ? (
                            <CheckCircle className="w-4 h-4 text-primary" />
                          ) : (
                            <XCircle className="w-4 h-4 text-destructive" />
                          )}
                          <span
                            className={
                              feature.included ? "" : "opacity-60 line-through"
                            }
                          >
                            {feature.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`w-full mt-6 py-4 text-base font-semibold ${
                      plan.highlight
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    } ${
                      plan.showContact
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : ""
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
