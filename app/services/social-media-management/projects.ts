import { Zap, TrendingUp, Users } from "lucide-react";
import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
}

export interface ProjectStat {
  icon: React.ElementType;
  value: string;
  label: string;
}

interface ProjectDetail {
  stats: ProjectStat[];
  overview: string;
  challenge: string;
  solution: string;
}

export const portfolioProjects: Project[] = [
  {
    title: "Viral Brand Campaign",
    description:
      "A TikTok growth campaign that reached over 1M views in under a week, significantly boosting brand awareness and consumer interest.",
    image:
      "https://images.unsplash.com/photo-1625602818607-3d90353a1f4a?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
    slug: "viral-brand-campaign",
  },
  {
    title: "Instagram Growth Strategy",
    description:
      "Increased engagement rate by 300% for a local brand through authentic storytelling, community management, and targeted posts.",
    image:
      "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
    slug: "instagram-growth",
  },
  {
    title: "YouTube Channel Revamp",
    description:
      "Optimized channel branding, video thumbnails, and SEO to triple video watch time and drive sustainable subscriber growth in 2 months.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
    slug: "youtube-revamp",
  },
];

export const projectDetails: Record<string, ProjectDetail> = {
  "viral-brand-campaign": {
    stats: [
      { icon: Users, value: "+1M", label: "Organic Views" },
      { icon: TrendingUp, value: "350%", label: "Engagement Increase" },
      { icon: Zap, value: "4 Days", label: "Time to Viral" },
    ],
    overview:
      "This campaign turned a relatively unknown brand into a viral sensation by leveraging trending TikTok formats and creator collaborations. Within just four days, the content achieved over 1 million organic views, transforming the brand’s digital presence.",
    challenge:
      "The brand lacked a distinct voice and struggled to break through the noise on fast-paced platforms like TikTok.",
    solution:
      "We developed a high-energy, personality-driven content series focused on user-generated trends, rapidly increasing discoverability and organic shares.",
  },
  "instagram-growth": {
    stats: [
      { icon: Users, value: "5K+", label: "New Followers" },
      { icon: TrendingUp, value: "300%", label: "Engagement Rate" },
      { icon: Zap, value: "Consistent", label: "Story Views" },
    ],
    overview:
      "By humanizing the brand through relatable storytelling and interactive community engagement, we boosted follower growth and built a loyal audience. This approach created a genuine connection with the local community, driving consistent engagement.",
    challenge:
      "Existing content was polished but impersonal, failing to connect deeply with the local target audience.",
    solution:
      "We shifted to authentic, behind-the-scenes video content and interactive polls, fostering a strong community and driving high-value interactions.",
  },
  "youtube-revamp": {
    stats: [
      { icon: Users, value: "3x", label: "Watch Time" },
      { icon: TrendingUp, value: "95%", label: "SEO Score" },
      { icon: Zap, value: "70%", label: "Subscriber Growth" },
    ],
    overview:
      "Through a full rebranding and SEO optimization strategy, the YouTube channel became a leading source of educational content in its niche. The overhaul boosted discoverability, retention, and subscriber growth — all while maintaining brand authenticity.",
    challenge:
      "The channel had valuable content but poor visibility due to unoptimized titles, descriptions, and branding.",
    solution:
      "A complete overhaul of channel art, video thumbnails, and metadata strategies was implemented, focusing on long-tail keywords and viewer retention.",
  },
};
