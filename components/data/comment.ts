export interface Comment {
    name: string;
    job_title: string;
    image?: string;
    description: string;
    rating: number;
}

export const comments: Comment[] = [
    {
        name: "Sineth Maleesha",
        job_title: "Manager",
        description: "MarketPro completely transformed our digital presence. Their strategic approach and execution resulted in a 300% increase in qualified leads within just 6 months.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        name: "Michael Chen",
        job_title: "Founder, EcoShop",
        description: "Working with this team has been a game-changer. They don't just execute campaigns, they become true partners in your growth journey.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        name: "Emily Rodriguez",
        job_title: "Marketing Director, StyleHub",
        description: "The ROI we've seen has been incredible. Their data-driven approach and creative campaigns have exceeded all our expectations.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
]