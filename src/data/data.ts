import {
  ContactInfo,
  ContactOption,
  FAQProps,
  MapFeature,
  messageProps,
  NavData,
  NavigationItem,
  navlinkProps,
  Service,
  SocialItem,
  TeamMember,
} from "@/types/types";
import {
  Github,
  Linkedin,
  Twitter,
  User,
  AppWindow,
  AlignCenterHorizontalIcon,
  Globe,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export const navLinks: navlinkProps[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const navigation: {
  main: NavigationItem[];
  social: SocialItem[];
} = {
  main: [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "About", href: "#" },
    { name: "Docs", href: "#" },
  ],

  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/ansub",
      Icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/ansub",
      Icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ansub",
      Icon: Linkedin,
    },
  ],
};

export const faqs: FAQProps[] = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it responsive?",
    answer: "Yes, it works seamlessly across all devices.",
  },
  {
    id: "item-3",
    question: "Can I customize it?",
    answer: "Absolutely! You can tweak it to match your style.",
  },
  {
    id: "item-4",
    question: "Does it support animations?",
    answer: "Yes, you can integrate animations easily.",
  },
];

export const mapfeature: MapFeature[] = [
  {
    title: "Seamless Authentication",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
    icon: User,
  },
  {
    title: "Portfolio Templates",
    description:
      "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
    icon: AppWindow,
  },
  {
    title: "Modern Design",
    description:
      "Ensure your organization stays compliant and secure with structured workflows and custom permissions tailored for you.",
    icon: AlignCenterHorizontalIcon,
  },
  {
    title: "Perfect Analytics",
    description:
      "You can analyze how many click your portfolio got, along with device and location.",
    icon: AlignCenterHorizontalIcon,
  },
  {
    title: "Modern Design",
    description:
      "Ensure your organization stays compliant and secure with structured workflows and custom permissions tailored for you.",
    icon: AlignCenterHorizontalIcon,
  },
];

export const messages: messageProps[] = [
  {
    title: "User123",
    content: "Hey, how are you doing today?",
    received: "10 minutes ago",
  },
  {
    title: "User123",
    content: "I really liked your recent post!",
    received: "2 hours ago",
  },
  {
    title: "User123",
    content: "Do you have any book recommendations?",
    received: "1 day ago",
  },
  {
    title: "User456",
    content: "Loved changes made to the site!",
    received: "3 days ago",
  },
  {
    title: "User123",
    content: "Can you recommend some new blog posts?",
    received: "5 days ago",
  },
];

export const data: NavData = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
          isActive: true,
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
      ],
    },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Arunava Dutta",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priyanshu Dutta",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Satyaki Dey",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export const services: Service[] = [
  {
    title: "Brand Identity",
    description:
      "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition.",
    icon: Globe,
  },
  {
    title: "Web Design",
    description:
      "We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action.",
    icon: Globe,
  },
  {
    title: "Mobile Design",
    description:
      "We design mobile and responsive web experiences, allowing users to interact with apps in a way that feels effortless.",
    icon: Globe,
  },
  {
    title: "Illustration",
    description:
      "We create visual stories that help explain your mission and vision.",
    icon: Globe,
  },
  {
    title: "Iconography",
    description: "Icons that support the brand and help simplify your message.",
    icon: Globe,
  },
  {
    title: "Development",
    description:
      "Solve any design challenge in Webflow. If you can dream it, we can build it.",
    icon: Globe,
  },
];

export const contactOptions: ContactOption[] = [
  { id: "website", label: "Website design" },
  { id: "ux", label: "Website design" },
  { id: "ui", label: "Website design" },
  { id: "app", label: "Website design" },
  { id: "backend", label: "Website design" },
  { id: "ml", label: "Website design" },
];

export const contactDetails: ContactInfo[] = [
  {
    title: "Call Us",
    description: "Reach out to our team via phone.",
    subtext: "+91 8481867003",
    icon: Phone,
  },
  {
    title: "Visit Our Site",
    description: "Check out our website for more info.",
    subtext: "www.abc.com",
    icon: MapPin,
  },
  {
    title: "Chat With Us",
    description: "We're available 24/7 for support.",
    subtext: "Live chat on our website",
    icon: MessageCircle,
  },
];
