import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Aura Fine Dining",
    category: "Restaurant Branding",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Elevate Heights",
    category: "Real Estate Campaign",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Nova Tech University",
    category: "University Promotion",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Horizon Escapes",
    category: "Travel Agency Marketing",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-surface2 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display mb-4 text-5xl font-bold md:text-6xl"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400"
            >
              A glimpse into our premium digital transformations.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#cta"
            className="flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition-colors hover:bg-white hover:text-black"
          >
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

              <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-8 transition-transform duration-500 group-hover:translate-y-0">
                <p className="mb-2 text-sm font-medium text-accent-cyan opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                  {project.category}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex h-12 w-12 translate-x-4 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
