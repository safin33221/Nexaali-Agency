import {
  Building2,
  GraduationCap,
  Monitor,
  Palette,
  Plane,
  Share2,
  Video,
  Wand2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Custom Software Development",
    desc: "Scalable web applications, ERP, POS, CRM, and business management systems.",
    className: "md:col-span-2",
  },
  {
    icon: Wand2,
    title: "AI Automation",
    desc: "Automate workflows, customer support, lead generation, and operations.",
    className: "md:col-span-2",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Modern, intuitive, and conversion-focused digital experiences.",
    className: "",
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    desc: "Strategic campaigns to increase visibility, leads, and revenue.",
    className: "",
  },
  {
    icon: Plane,
    title: "Website & E-Commerce",
    desc: "Business websites, online stores, and high-converting landing pages.",
    className: "md:col-span-2",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional short-form and promotional videos for brands.",
    className: "",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    desc: "Creative animations and visual storytelling for businesses.",
    className: "",
  },
  {
    icon: Building2,
    title: "Business Automation",
    desc: "CRM, inventory, HR, and operational process automation solutions.",
    className: "",
  },
  {
    icon: GraduationCap,
    title: "Educational Solutions",
    desc: "School, coaching center, and learning management platforms.",
    className: "",
  },
];

export function Services() {
  return (<section id="services" className="relative py-32"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />


    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-6 text-5xl font-bold md:text-6xl"
        >
          Premium{" "}
          <span className="text-gradient-accent">
            Services
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-xl text-gray-400"
        >
          Comprehensive digital solutions tailored for modern businesses
          aiming for growth, automation, and market dominance.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`glass-card group relative overflow-hidden rounded-3xl p-8 min-h-[260px] ${service.className}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                <service.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="font-display mb-4 text-2xl font-bold text-white transition-colors group-hover:text-accent-cyan">
                {service.title}
              </h3>

              <p className="leading-relaxed text-gray-400">
                {service.desc}
              </p>

              <div className="mt-auto pt-6">
                <span className="text-sm font-medium text-accent-cyan">
                  Learn More →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>


  );
}
