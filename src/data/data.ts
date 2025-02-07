import { FAQProps, MapFeature, messageProps, NavData, NavigationItem, navlinkProps, SocialItem } from "@/types/types";
import { Github, Linkedin, Twitter } from "lucide-react";
import { User, AppWindow, AlignCenterHorizontalIcon } from "lucide-react";

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
      Icon: Linkedin
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