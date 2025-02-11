import {
  ChartProps,
  ContactInfo,
  ContactOption,
  FAQProps,
  MapFeature,
  messageProps,
  NavData,
  NavigationItem,
  navlinkProps,
  PiePropsInterface,
  Project,
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

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    thumbnail:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1000",
    createdAt: "2024-01-20",
    branch: "main",
    status: "active",
    metrics: {
      views: 1200,
      uniqueVisitors: 567,
    },
  },
  {
    name: "E-commerce Dashboard",

    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    createdAt: "2024-01-15",
    branch: "development",
    status: "active",
    metrics: {
      views: 2500,
      uniqueVisitors: 890,
    },
  },
  {
    name: "Task Management App",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
    createdAt: "2024-01-10",
    branch: "feature/tasks",
    status: "inactive",
    metrics: {
      views: 800,
      uniqueVisitors: 245,
    },
  },
  {
    name: "Weather Forecast",
    thumbnail:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000",
    createdAt: "2024-01-05",
    branch: "main",
    status: "active",
    metrics: {
      views: 3100,
      uniqueVisitors: 1200,
    },
  },
];
export const chartData: ChartProps[] = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export const chartDataPie: PiePropsInterface[] = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
