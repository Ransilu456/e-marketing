export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
  technologies: string[];
}

export const posterProjects: Project[] = [
  {
    title: "FitPulse – Health & Fitness Tracker",
    description:
      "A fitness tracking app offering personalized health insights, real-time activity tracking, and AI-based suggestions for workouts and diet plans.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
    slug: "fitpulse-health-fitness",
    features: [
      "Step counting and calorie tracking",
      "Workout scheduling and reminders",
      "Integration with smartwatches",
      "Cloud sync across devices",
    ],
    technologies: ["Flutter", "Firebase", "Node.js", "TensorFlow Lite"],
  },
  {
    title: "ShopEase – E-commerce Platform",
    description:
      "A full-featured e-commerce mobile solution providing a seamless shopping experience, with real-time order tracking and secure payments.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    slug: "shopease-ecommerce",
    features: [
      "Product catalog with smart search",
      "One-click checkout and secure payment",
      "Push notifications for offers",
      "Integrated delivery tracking",
    ],
    technologies: ["React Native", "Stripe", "MongoDB", "Express.js"],
  },
  {
    title: "Foodico – Food Delivery Platform",
    description:
      "A powerful mobile app for restaurant and delivery management with GPS tracking and automated driver assignment.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop",
    slug: "foodico-delivery",
    features: [
      "Live GPS order tracking",
      "Multi-restaurant system",
      "Admin dashboard integration",
      "Real-time chat between users and drivers",
    ],
    technologies: ["Flutter", "Google Maps API", "Firebase", "Node.js"],
  },
];
