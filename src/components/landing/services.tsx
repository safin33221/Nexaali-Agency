import {
  Building2,
  GraduationCap,
  Monitor,
  Palette,
  Plane,
  Share2,
  Utensils,
  Video,
  Wand2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Crafting memorable brand identities that resonate and stand out.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Data-driven campaigns to grow your audience and engagement.",
  },
  {
    icon: Monitor,
    title: "Website Design",
    desc: "High-converting, visually stunning web experiences.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Cinematic video production for ads and content.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    desc: "Engaging animations that bring your brand to life.",
  },
  {
    icon: Building2,
    title: "Real Estate Branding",
    desc: "Premium marketing for luxury properties and agencies.",
  },
  {
    icon: Utensils,
    title: "Restaurant Marketing",
    desc: "Mouth-watering content to drive foot traffic and orders.",
  },
  {
    icon: GraduationCap,
    title: "Educational Promo",
    desc: "Strategic campaigns for schools and universities.",
  },
  {
    icon: Plane,
    title: "Travel Agency Promo",
    desc: "Inspiring visuals to boost bookings and destinations.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-6 text-5xl font-bold md:text-6xl"
          >
            Premium <span className="text-gradient-accent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-xl text-gray-400"
          >
            Comprehensive digital solutions tailored for modern businesses
            aiming for market dominance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card group relative overflow-hidden rounded-3xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display mb-3 text-2xl font-bold text-white transition-colors group-hover:text-accent-cyan">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-400">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
