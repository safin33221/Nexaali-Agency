import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/data/data";
import { ServiceDetailView } from "@/components/services/service-detail-view";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Softilo Agency",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Softilo Agency`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} - ${service.tagline} | Softilo Agency`,
      description: service.shortDesc,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();

  return <ServiceDetailView service={service} allServices={allServices} />;
}
