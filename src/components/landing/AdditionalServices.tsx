import { motion } from "framer-motion";

const additionalServices = [
    {
        service: "Landing Page Website",
        price: "৳4,999+",
    },
    {
        service: "Business Website",
        price: "৳9,999+",
    },
    {
        service: "E-commerce Website",
        price: "৳14,999+",
    },
    {
        service: "UI/UX Design",
        price: "৳3,999+",
    },
    {
        service: "Motion Graphics",
        price: "৳1,500+/Video",
    },
    {
        service: "AI Automation",
        price: "৳9,999+",
    },
    {
        service: "Custom Software Development",
        price: "Custom Quote",
    },
];

export function AdditionalServices() {
    return (<section className="relative py-24"> <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-cyan/10 via-transparent to-transparent" />


        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">
                    Additional <span className="text-gradient">Services</span>
                </h2>

                <p className="mx-auto max-w-2xl text-gray-400">
                    Need something beyond our standard packages? Explore our
                    specialized services tailored for your business growth.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {additionalServices.map((item, index) => (
                    <motion.div
                        key={item.service}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                        }}
                        className="glass-card group rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-accent-blue/30"
                    >
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white">
                                {item.service}
                            </h3>
                        </div>

                        <div className="flex items-end justify-between">
                            <span className="font-display text-3xl font-bold text-accent-cyan">
                                {item.price}
                            </span>

                            <button
                                type="button"
                                className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                            >
                                Get Quote
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>


);
}
