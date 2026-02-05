"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

const pageTransition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };

const features = [
  {
    icon: Sparkles,
    title: "Thinking Match",
    description: "Find agencies that approach marketing the same way you do.",
  },
  {
    icon: Target,
    title: "Goal Alignment",
    description: "Match based on your budget, industry, and growth stage.",
  },
  {
    icon: Users,
    title: "Curated Network",
    description: "Access vetted agencies with proven track records.",
  },
];

export default function HomePage() {
  const { setShowAuthModal, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={pageTransition}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Find agencies that{" "}
            <span className="font-serif italic text-primary">think</span> like you
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Branex matches startups with marketing agencies based on thinking style, 
            not just services. Find your perfect partner in minutes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            {isAuthenticated ? (
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/match">
                  Find Your Match
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={() => setShowAuthModal(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 bg-transparent"
            >
              <Link href="/explore">Explore Agencies</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 0.3 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {features.map((feature, index) => (
              <GlassCard
                key={feature.title}
                className="p-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...pageTransition, delay: 0.4 + index * 0.1 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 0.5 }}
          >
            <GlassCard className="p-10">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to find your perfect match?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Join hundreds of startups who found their ideal agency partner through Branex.
              </p>
              {isAuthenticated ? (
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/match">
                    Start Matching
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={() => setShowAuthModal(true)}
                  className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Create Free Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
