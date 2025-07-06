"use client";
import {
  Linkedin,
  Youtube,
  Instagram,
  X as XIcon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/50 bg-muted/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="TUF"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-3xl font-bold text-foreground">TUF</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The best place to learn data Structures, algorithms, most asked coding interview questions, real interview experiences free of cost.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: XIcon, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "About Us",
                "Contact Us",
                "Pricing",
                "Privacy Policy",
                "Terms and Conditions",
                "Cancellation / Refund Policy",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">Quick Access</h3>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Striver's DSA Sheet",
                "Technical Blogs",
                "CS Subjects",
                "Striver's CP Sheet",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* DSA Sheets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">DSA Sheets</h3>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Striver's SDE Sheet",
                "Striver's A2Z DSA Playlist",
                "SDE Core Sheet",
                "Striver's CP Sheet",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* DSA Playlist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6">DSA Playlist</h3>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Array Series",
                "Graph Series",
                "DP Series",
                "LinkedList Series",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Copyright © 2025 takeuforward | All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
