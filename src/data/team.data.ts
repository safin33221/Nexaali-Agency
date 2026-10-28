export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialUrl: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Safayet Hossan Safin",
    role: "Founder & CEO",
    image: "/images/team/safin.jpg", // Apnar chobi ba placeholder use hobe
    bio: "Leading software architectures, AI automations, and digital brand scaling at Softilo.",
    socialUrl: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "2",
    name: "Tanvir Ahmed",
    role: "Lead Full-Stack Engineer",
    image: "/images/team/tanvir.jpg",
    bio: "Specialized in high-performance Next.js apps, scalable backends, and cloud infrastructure.",
    socialUrl: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "3",
    name: "Ahsan Habib",
    role: "Head of UI/UX & Design",
    image: "/images/team/ahsan.jpg",
    bio: "Crafting Awwwards-level digital experiences, immersive dark aesthetics, and brand identities.",
    socialUrl: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    role: "AI Automation Specialist",
    image: "/images/team/nusrat.jpg",
    bio: "Building autonomous workflows, smart chatbot pipelines, and enterprise automation systems.",
    socialUrl: {
      linkedin: "https://linkedin.com"
    }
  }
];