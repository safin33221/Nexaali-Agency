import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const packages = [
  {
    name: "Starter",
    target: "For small businesses",
    price: "999",
    features: [
      "Social Media Management (2 platforms)",
      "Basic Branding Kit",
      "Monthly Content Calendar",
      "Email Support",
      "Basic Analytics",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    target: "For growing brands",
    price: "2,499",
    features: [
      "Social Media Management (4 platforms)",
      "Full Branding & Identity",
      "Ad Campaign Management",
      "Short-form Video Editing (4/mo)",
      "Website Maintenance",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    target: "For large businesses",
    price: "4,999",
    features: [
      "Omnichannel Management",
      "Custom Website Design",
      "Advanced Ad Strategies",
      "Full Video Production",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Custom Analytics Dashboard",
    ],
    highlight: false,
  },
];

export function Packages() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="packages" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-background to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-6 text-5xl font-bold md:text-6xl"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              type="button"
              aria-label="Toggle yearly pricing"
              onClick={() => setIsYearly((value) => !value)}
              className="relative h-8 w-16 rounded-full bg-white/10 p-1 transition-colors hover:bg-white/20"
            >
              <motion.div
                className="h-6 w-6 rounded-full bg-accent-blue"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-gray-500"}`}>
              Yearly <span className="ml-1 text-xs text-accent-cyan">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                pkg.highlight
                  ? "border border-accent-blue/50 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] md:-translate-y-4"
                  : "glass-card"
              }`}
            >
              {pkg.highlight ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent-blue px-4 py-1 text-sm font-medium tracking-wide text-white">
                  Most Popular
                </div>
              ) : null}

              <div className="mb-8">
                <h3 className="font-display mb-2 text-2xl font-bold text-white">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-400">{pkg.target}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl font-bold text-white">
                  $
                  {isYearly
                    ? Math.floor(
                        Number.parseInt(pkg.price.replace(",", ""), 10) * 0.8,
                      ).toLocaleString()
                    : pkg.price}
                </span>
                <span className="text-gray-400">/mo</span>
              </div>

              <ul className="mb-8 space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-accent-blue/20 p-1">
                      <Check className="h-3 w-3 text-accent-blue" />
                    </div>
                    <span className="text-sm leading-relaxed text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full rounded-full py-4 font-medium transition-all ${
                  pkg.highlight
                    ? "bg-white text-black hover:bg-gray-200 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Choose {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
