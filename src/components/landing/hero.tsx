import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-accent-purple/20 blur-[120px]" />
        <div className="animate-blob animation-delay-2000 absolute right-[-10%] top-[20%] h-[50%] w-[50%] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="animate-blob animation-delay-4000 absolute bottom-[-20%] left-[20%] h-[60%] w-[60%] rounded-full bg-accent-cyan/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="glass-card inline-flex w-fit items-center gap-2 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              Premium Digital Agency
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Building Brands That{" "}
            <span className="text-gradient-accent">Dominate</span> Digitally
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            We help businesses grow with premium branding, stunning visuals,
            social media marketing, websites, and performance-driven creative
            strategies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#cta"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-black shadow-[0_0_0_rgba(59,130,246,0)] transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="glass-card flex items-center gap-2 rounded-full px-8 py-4 font-medium transition-all hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              View Packages
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden h-[600px] lg:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="h-64 w-64 rounded-full bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-cyan blur-2xl opacity-60"
            />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="glass-card absolute right-10 top-20 w-64 rounded-2xl border-white/10 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple" />
                <div>
                  <div className="mb-2 h-3 w-20 rounded-full bg-white/20" />
                  <div className="h-2 w-12 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-4/5 rounded-full bg-white/10" />
                <div className="h-2 w-full rounded-full bg-white/10" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="glass-card absolute bottom-32 left-0 w-72 rounded-2xl border-white/10 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <div className="mb-1 text-sm text-gray-400">Growth</div>
                  <div className="font-display text-3xl font-bold text-white">
                    +250%
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan/20 text-accent-cyan">
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </div>
              </div>
              <div className="flex h-16 items-end gap-2">
                {[40, 70, 45, 90, 65, 100].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue/50 to-accent-cyan"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
