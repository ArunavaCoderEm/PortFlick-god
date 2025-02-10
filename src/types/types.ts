import React from "react";

export interface navlinkProps {
  label: string;
  path: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialItem {
  name: string;
  href: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface AnimatedShinyTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
}

export interface BackgroundStarsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  numStars?: number;
  color?: string;
  className?: string;
  fade?: boolean;
}

export interface SparkleProps {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

export interface SparklesTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  colors?: {
    first: string;
    second: string;
  };
  className?: string;
  sparklesCount?: number;
}

export interface SparkleData extends SparkleProps {
  lifespan: number;
}

export interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: number;
  duration?: number;
  anchor?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export interface FAQProps {
  id: string;
  question: string;
  answer: string;
}

export interface MapFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface messageProps {
  title: string;
  content: string;
  received: string;
}

export interface NavItem {
  title: string;
  url: string;
  isActive?: boolean;
}

export interface NavSection {
  title: string;
  url: string;
  items?: NavItem[];
}

export interface NavData {
  navMain: NavSection[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ContactOption {
  id: string;
  label: string;
}

export type ContactInfo = {
  title: string;
  description: string;
  subtext?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export interface UserProps {
  email?: string;
  phone?: string;
  username?: string;
  avatar?: string;
  clerkid?: string;
}

export interface ChartProps {
  month : string,
  desktop: number,
  mobile: number,
}

export interface PiePropsInterface {
  browser : string,
  visitors: number,
  fill: string,
}