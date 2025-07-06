"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const FAQ_CATEGORIES = [
  {
    key: "course-content",
    label: "Course Content & Curriculum",
    faqs: [
      {
        q: "What topics are covered in the DSA course?",
        a: "Our comprehensive DSA course covers fundamental data structures (arrays, linked lists, stacks, queues, trees, graphs), advanced algorithms (dynamic programming, greedy algorithms, backtracking), and system design concepts. You'll get hands-on practice with 500+ curated problems, editorial videos, weekly contests, and mock interviews to prepare you for technical interviews at top tech companies.",
      },
      {
        q: "Are there any prerequisites for enrolling in this course?",
        a: "No prerequisites are required! The course is designed to accommodate all skill levels, from complete beginners to experienced developers. We start with fundamental concepts and gradually progress to advanced topics. If you're new to programming, we recommend starting with our basic programming fundamentals module first.",
      },
      {
        q: "Is the course content updated regularly?",
        a: "Absolutely! We update our course content monthly to reflect the latest industry trends, new interview patterns, and emerging technologies. Our curriculum team constantly monitors top tech companies' interview processes and incorporates new problem types, system design patterns, and best practices to ensure you're always learning the most relevant skills.",
      },
      {
        q: "How long does it take to complete the full course?",
        a: "The course is self-paced, but we recommend dedicating 2-3 hours daily for optimal learning. Most students complete the full curriculum in 4-6 months. However, you can take as much time as you need - your access never expires, and you can revisit any topic anytime.",
      },
      {
        q: "Do you offer different difficulty levels?",
        a: "Yes! Our course is structured with three difficulty levels: Beginner, Intermediate, and Advanced. Each level includes appropriate problem sets, video explanations, and practice exercises. You can start at any level based on your current skills and progress at your own pace.",
      },
    ],
  },
  {
    key: "account-management",
    label: "Account Management",
    faqs: [
      {
        q: "How do I reset my password?",
        a: "To reset your password, click on 'Forgot Password' at the login page, enter your registered email address, and follow the instructions sent to your inbox. The reset link is valid for 24 hours. If you don't receive the email, check your spam folder or contact our support team.",
      },
      {
        q: "Can I change my registered email address?",
        a: "Yes, you can update your email address from your account settings. Go to Profile > Account Settings > Email, enter your new email address, and verify it through the confirmation email. Your old email will remain active until the new one is verified.",
      },
      {
        q: "How do I update my profile information?",
        a: "Navigate to your Profile section and click on 'Edit Profile'. You can update your name, profile picture, bio, and other personal information. Changes are saved automatically, and you can update your information anytime.",
      },
      {
        q: "Can I download my learning progress and certificates?",
        a: "Yes! You can download your learning progress reports, completion certificates, and achievement badges from your Dashboard. Go to Progress > Download Reports to access PDF versions of your certificates and detailed progress analytics.",
      },
      {
        q: "What happens to my account if I don't log in for a while?",
        a: "Your account remains active indefinitely. We never delete accounts due to inactivity. However, we recommend logging in regularly to stay updated with new content, participate in contests, and maintain your learning momentum.",
      },
    ],
  },
  {
    key: "support",
    label: "Course Access & Technical Support",
    faqs: [
      {
        q: "Who do I contact for technical issues?",
        a: "For technical support, you can reach our dedicated support team through multiple channels: 1) Help Center chat (available 24/7), 2) Email at support@takeuforward.com, 3) Community forum for peer support, or 4) Schedule a call with our technical experts. We typically respond within 2-4 hours.",
      },
      {
        q: "What devices and browsers are supported?",
        a: "Our platform works on all modern browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, laptop, tablet, mobile). For the best experience, we recommend using Chrome or Firefox on a desktop/laptop. Our mobile app is also available for iOS and Android.",
      },
      {
        q: "Can I access the course offline?",
        a: "Yes! You can download course materials, problem sets, and video content for offline viewing. Use our mobile app or browser extension to download content when you have internet access and study offline. Downloaded content is available for 30 days before requiring a refresh.",
      },
      {
        q: "What if I experience video playback issues?",
        a: "If you're experiencing video issues, try: 1) Clearing your browser cache, 2) Using a different browser, 3) Checking your internet connection, 4) Disabling browser extensions. If problems persist, contact our support team with your browser details and we'll help resolve the issue.",
      },
      {
        q: "How do I report bugs or suggest improvements?",
        a: "We welcome feedback! You can report bugs or suggest improvements through: 1) The feedback form in your dashboard, 2) Community forum discussions, 3) Direct email to feedback@takeuforward.com. Our product team reviews all submissions and implements the most requested features regularly.",
      },
    ],
  },
  {
    key: "pricing-billing",
    label: "Pricing & Billing",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and digital wallets (Apple Pay, Google Pay). For enterprise customers, we also offer invoice-based billing with net 30 payment terms.",
      },
      {
        q: "Can I get a refund if I'm not satisfied?",
        a: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within 30 days of purchase, contact our support team for a full refund. No questions asked - we want you to be confident in your investment.",
      },
      {
        q: "Do you offer student discounts?",
        a: "Absolutely! Students with valid .edu email addresses can get 50% off all our courses. Simply use your student email during registration and verify your student status. We also offer special discounts for groups of 5+ students from the same institution.",
      },
      {
        q: "Can I upgrade or downgrade my subscription?",
        a: "Yes, you can change your subscription plan anytime. Upgrades take effect immediately, while downgrades apply at your next billing cycle. You'll only pay the prorated difference for upgrades, and unused time is credited for downgrades.",
      },
      {
        q: "Is there a free trial available?",
        a: "Yes! We offer a 7-day free trial that gives you access to our complete course library, including all video content, practice problems, and community features. No credit card required to start your trial - just sign up and start learning immediately.",
      },
    ],
  },
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState(
    FAQ_CATEGORIES[0].key
  );
  const currentCategory = FAQ_CATEGORIES.find(
    (cat) => cat.key === selectedCategory
  );

  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-foreground text-center">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
          Find answers to the most common questions about our courses, platform, and support. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
        </p>
        
        {/* Desktop Layout with Sidebar */}
        <div className="hidden lg:flex w-full min-h-125 bg-background rounded-xl border shadow-sm overflow-hidden">
          {/* Local Sidebar */}
          <div className="w-64 max-w-xs border-r bg-muted/50 flex flex-col py-8 px-0">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`text-left px-6 py-3 rounded-md mb-1 font-medium transition-colors
                  ${selectedCategory === cat.key
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-accent"}
                `}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* FAQ Content */}
          <div className="flex-1 flex items-start justify-center p-8 bg-background">
            <Card className="w-full max-w-2xl">
              <CardContent>
                {currentCategory ? (
                  <Accordion type="single" collapsible className="w-full">
                    {currentCategory.faqs.map((faq, idx) => (
                      <AccordionItem value={String(idx)} key={idx}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent>{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Layout with Tabs */}
        <div className="lg:hidden">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <TabsList className="flex w-max h-auto p-1 bg-muted/50">
                {FAQ_CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.key}
                    value={cat.key}
                    className="text-xs sm:text-sm whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {FAQ_CATEGORIES.map((cat) => (
              <TabsContent key={cat.key} value={cat.key} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {cat.faqs.map((faq, idx) => (
                        <AccordionItem value={String(idx)} key={idx}>
                          <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                          <AccordionContent>{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
