import { Metadata } from "next";
import { getAllProjects } from "@/data/data";
import { PortfolioView } from "@/components/portfolio/portfolio-view";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Softilo Agency",
  description:
    "Explore our showcase of digital masterworks across Custom Software, AI Automation, UI/UX Design, and High-Impact Digital Marketing.",
  openGraph: {
    title: "Portfolio & Case Studies | Softilo Agency",
    description:
      "Explore our showcase of digital masterworks across Custom Software, AI Automation, UI/UX Design, and High-Impact Digital Marketing.",
    type: "website",
  },
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return <PortfolioView projects={projects} />;
}
