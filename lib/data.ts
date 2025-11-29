export interface Book {
    id: string;
    title: string;
    author: string;
    cover: string;
    description: string;
    rating: number;
    chapters: number;
    status: "Ongoing" | "Completed";
    tags: string[];
}

export const books: Book[] = [
    {
        id: "1",
        title: "The Beginning After The End",
        author: "TurtleMe",
        cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80",
        description: "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power.",
        rating: 4.8,
        chapters: 1200,
        status: "Ongoing",
        tags: ["Fantasy", "Reincarnation", "Action"],
    },
    {
        id: "2",
        title: "Shadow Slave",
        author: "GuiltyThree",
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80",
        description: "Growing up in poverty, Sunny never expected anything good from life. However, after being chosen by the Nightmare Spell, he must survive in a ruined world.",
        rating: 4.9,
        chapters: 1500,
        status: "Ongoing",
        tags: ["Dark Fantasy", "System", "Adventure"],
    },
    {
        id: "3",
        title: "Lord of the Mysteries",
        author: "Cuttlefish That Loves Diving",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
        description: "In the waves of steam and machinery, who could achieve extraordinary? In the fogs of history and darkness, who was whispering?",
        rating: 5.0,
        chapters: 1432,
        status: "Completed",
        tags: ["Steampunk", "Mystery", "Lovecraftian"],
    },
    {
        id: "4",
        title: "Omniscient Reader's Viewpoint",
        author: "SingShong",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
        description: "Only I know the end of this world. One day our MC finds himself stuck in the world of his favorite webnovel.",
        rating: 4.9,
        chapters: 551,
        status: "Completed",
        tags: ["Apocalypse", "System", "Action"],
    },
    {
        id: "5",
        title: "Reverend Insanity",
        author: "Gu Zhen Ren",
        cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
        description: "A story of a villain. Fang Yuan was reborn 500 years into the past with the Spring Autumn Cicada.",
        rating: 4.7,
        chapters: 2334,
        status: "Completed",
        tags: ["Xianxia", "Villain", "Time Travel"],
    },
];
