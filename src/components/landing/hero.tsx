import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/10 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-cyan" />
            <span className="text-sm font-medium text-gray-300">
              Premium Digital Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Building Brands That{" "}
            <span className="text-gradient-accent">
              Dominate
            </span>{" "}
            Digitally
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            We help businesses grow through Software Development,
            AI Automation, Digital Marketing, Branding,
            Websites, and Creative Solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#packages"
              className="glass-card flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-all hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              View Packages
            </motion.a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="glass-card rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="mt-2 text-sm text-gray-400">
                Projects Delivered
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-white">25+</h3>
              <p className="mt-2 text-sm text-gray-400">
                Happy Clients
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-white">99%</h3>
              <p className="mt-2 text-sm text-gray-400">
                Client Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}