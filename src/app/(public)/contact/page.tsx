import { Metadata } from "next";
import { getAllServices } from "@/data/data";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Book a Consultation & Contact | Softilo Agency",
  description:
    "Initiate your project brief with Softilo. Connect directly with senior architects for custom software, AI automation, and high-impact branding.",
  openGraph: {
    title: "Book a Consultation & Contact | Softilo Agency",
    description:
      "Initiate your project brief with Softilo. Connect directly with senior architects for custom software, AI automation, and high-impact branding.",
    type: "website",
  },
};

export default function ContactPage() {
  const services = getAllServices();

  return <ContactView services={services} />;
}
