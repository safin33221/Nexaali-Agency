import { Clock, Lightbulb, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Clients Worldwide",
    color: "text-accent-blue",
  },
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average Growth",
    color: "text-accent-cyan",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Dedicated Support",
    color: "text-accent-purple",
  },
  {
    icon: Lightbulb,
    value: "10+",
    label: "Strategy Experts",
    color: "text-white",
  },
];

export function Stats() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover group relative flex flex-col items-center overflow-hidden rounded-3xl p-8 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <stat.icon
                className={`mb-4 h-8 w-8 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 ${stat.color}`}
              />
              <h3 className="font-display mb-2 text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
