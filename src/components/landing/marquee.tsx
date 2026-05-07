import { motion } from "framer-motion";

const brands = [
  "Lumina Tech",
  "Vertex Capital",
  "Nova Schools",
  "Aura Dining",
  "Elevate Real Estate",
  "Horizon Travel",
  "Nexus Health",
  "Quantum Corp",
];

const clients = [...brands, ...brands];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-surface/50 py-20">
      <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
          Trusted by modern businesses worldwide
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex w-max items-center gap-8 whitespace-nowrap px-4"
        >
          {clients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="glass-card flex min-w-[200px] items-center justify-center rounded-full px-8 py-4"
            >
              <span className="font-display text-xl font-bold text-white/70">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
