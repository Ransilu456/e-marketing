export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
  technologies: string[];
}

export const mobileProjects: Project[] = [
  {
    title: "FitPulse – Health & Fitness Tracker",
    description:
      "A fitness tracking app offering personalized health insights, real-time activity tracking, and AI-based suggestions for workouts and diet plans.",
    image: "https://placehold.co/800x450/22c55e/ffffff?text=FitPulse+App",
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
    image: "https://placehold.co/800x450/0ea5e9/ffffff?text=ShopEase+App",
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
    image: "https://placehold.co/800x450/f97316/ffffff?text=Foodico+Delivery",
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
