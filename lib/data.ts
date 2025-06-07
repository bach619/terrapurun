// Types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ImpactStat {
  id: number;
  title: string;
  value: string;
  icon: string;
}

export interface CommunityProgram {
  id: number;
  title: string;
  description: string;
  impact: string;
  participants: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  sizes: string[];
  environmentalBenefits: string[];
  socialBenefits: string[];
  price: number;
  image: string;
  slug: string;
  features: string[];
  artisanWage: number;
  communityBenefit: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'peatland' | 'crafting' | 'product' | 'community';
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'product' | 'conservation' | 'general';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Siti Rahayu",
    role: "Local Artisan",
    content: "Working with purun has been a tradition in my family for generations. Now, through PurunGuard, we can preserve our culture while earning a sustainable income and protecting our local peatlands.",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Urban Gardener",
    content: "I switched all my plants to purun polybags last year. Not only do my plants grow better with improved air flow, but I feel good knowing I'm supporting both ecological conservation and traditional crafts.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    role: "Environmental Scientist",
    content: "PurunGuard's approach is a model of sustainable development. They're effectively linking ecosystem preservation with economic opportunities for local communities. The data shows real impact.",
    avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const communityPrograms: CommunityProgram[] = [
  {
    id: 1,
    title: "Artisan Skills Development",
    description: "Advanced training in purun weaving techniques and product innovation",
    impact: "Increased income by 45% for participating artisans",
    participants: 120
  },
  {
    id: 2,
    title: "Business Management Workshop",
    description: "Training in financial literacy, marketing, and business operations",
    impact: "85% of participants started their own micro-enterprises",
    participants: 75
  },
  {
    id: 3,
    title: "Youth Apprenticeship Program",
    description: "Connecting young community members with master artisans",
    impact: "30 new young artisans trained in traditional crafts",
    participants: 30
  },
  {
    id: 4,
    title: "Community Health Initiative",
    description: "Healthcare access and wellness programs for artisan families",
    impact: "Healthcare coverage for 250+ family members",
    participants: 85
  }
];

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    title: "Hectares Protected",
    value: "5,370+",
    icon: "leaf",
  },
  {
    id: 2,
    title: "Families Supported",
    value: "350+",
    icon: "users",
  },
  {
    id: 3,
    title: "Average Income Increase",
    value: "45%",
    icon: "trending-up",
  },
  {
    id: 4,
    title: "Community Programs",
    value: "12+",
    icon: "heart",
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Small Purun Polybag",
    description: "Perfect for herbs, small flowers, and seedlings. These handwoven purun polybags provide excellent aeration and water drainage.",
    sizes: ["10cm x 10cm", "12cm x 12cm"],
    environmentalBenefits: [
      "100% biodegradable",
      "Plastic-free",
      "Improves soil aeration",
      "Prevents root circling"
    ],
    socialBenefits: [
      "Fair wage guaranteed",
      "Healthcare support included",
      "Educational opportunities",
      "Community development fund"
    ],
    price: 0.79,
    image: "https://images.pexels.com/photos/1207978/pexels-photo-1207978.jpeg",
    slug: "small-purun-polybag",
    features: ["Handwoven", "Water resistant", "Breathable", "Durable"],
    artisanWage: 0.25,
    communityBenefit: "15% goes to community projects"
  },
  {
    id: 2,
    name: "Medium Purun Polybag",
    description: "Ideal for most house plants, vegetables, and small shrubs. The medium size provides room for growth while maintaining durability.",
    sizes: ["15cm x 15cm", "18cm x 18cm"],
    environmentalBenefits: [
      "100% biodegradable",
      "Plastic-free",
      "Improves soil aeration",
      "Prevents root circling"
    ],
    socialBenefits: [
      "Fair wage guaranteed",
      "Healthcare support included",
      "Educational opportunities",
      "Community development fund"
    ],
    price: 1.99,
    image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
    slug: "medium-purun-polybag",
    features: ["Handwoven", "Water resistant", "Breathable", "Durable"],
    artisanWage: 0.50,
    communityBenefit: "15% goes to community projects"
  },
  {
    id: 3,
    name: "Large Purun Polybag",
    description: "Perfect for trees, large shrubs, and statement plants. Our large purun polybags offer exceptional strength and stability.",
    sizes: ["20cm x 20cm", "25cm x 25cm"],
    environmentalBenefits: [
      "100% biodegradable",
      "Plastic-free",
      "Improves soil aeration",
      "Prevents root circling"
    ],
    socialBenefits: [
      "Fair wage guaranteed",
      "Healthcare support included",
      "Educational opportunities",
      "Community development fund"
    ],
    price: 2.99,
    image: "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg",
    slug: "large-purun-polybag",
    features: ["Handwoven", "Water resistant", "Breathable", "Durable"],
    artisanWage: 0.75,
    communityBenefit: "15% goes to community projects"
  },
  // {
  //   id: 4,
  //   name: "Purun Polybag Starter Kit",
  //   description: "Everything you need to get started with sustainable gardening. Includes a variety of purun polybags and planting guides.",
  //   sizes: ["Mixed sizes"],
  //   environmentalBenefits: [
  //     "100% biodegradable",
  //     "Plastic-free",
  //     "Improves soil aeration",
  //     "Prevents root circling"
  //   ],
  //   socialBenefits: [
  //     "Fair wage guaranteed",
  //     "Healthcare support included",
  //     "Educational opportunities",
  //     "Community development fund"
  //   ],
  //   price: 24.99,
  //   image: "https://images.pexels.com/photos/6231753/pexels-photo-6231753.jpeg",
  //   slug: "purun-polybag-starter-kit",
  //   features: ["Handwoven", "Water resistant", "Breathable", "Durable", "Includes planting guide"],
  //   artisanWage: 5.00,
  //   communityBenefit: "15% goes to community projects"
  // },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Pristine Peatland Ecosystem",
    description: "A healthy peatland ecosystem in Central Kalimantan, Indonesia.",
    image: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "peatland"
  },
  {
    id: 2,
    title: "Traditional Purun Weaving",
    description: "Local artisan demonstrating traditional purun weaving techniques.",
    image: "https://images.pexels.com/photos/2252558/pexels-photo-2252558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "crafting"
  },
  {
    id: 3,
    title: "Purun Polybags in Use",
    description: "Flourishing plants in purun polybags demonstrating their practical application.",
    image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "product"
  },
  {
    id: 4,
    title: "Community Workshop",
    description: "Local community members participating in a purun crafting workshop.",
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "community"
  },
  {
    id: 5,
    title: "Flora of Peatlands",
    description: "Unique plant species that thrive in peatland ecosystems.",
    image: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "peatland"
  },
  {
    id: 6,
    title: "Purun Harvest",
    description: "Sustainable harvesting of purun reeds from managed peatlands.",
    image: "https://images.pexels.com/photos/4947406/pexels-photo-4947406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "crafting"
  },
  {
    id: 7,
    title: "Growth Comparison",
    description: "Side-by-side comparison of plant growth in purun vs plastic containers.",
    image: "https://images.pexels.com/photos/4505173/pexels-photo-4505173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "product"
  },
  {
    id: 8,
    title: "Community Impact",
    description: "Local families benefiting from the sustainable purun economy.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "community"
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What are purun polybags made of?",
    answer: "Purun polybags are handcrafted from naturally growing purun reeds that thrive in peatland ecosystems. These reeds are sustainably harvested, dried, and skillfully woven using traditional techniques passed down through generations.",
    category: "product"
  },
  {
    id: 2,
    question: "How long do purun polybags last?",
    answer: "With proper care, purun polybags can last 1-2 years of active use. Unlike plastic, when they eventually degrade, they return to the earth as natural materials without leaving harmful microplastics behind.",
    category: "product"
  },
  {
    id: 3,
    question: "Are purun polybags suitable for all plants?",
    answer: "Purun polybags work exceptionally well for most plants. They excel particularly with plants that benefit from good aeration and drainage, such as herbs, vegetables, and many houseplants. Very water-loving plants may require more frequent watering.",
    category: "product"
  },
  {
    id: 4,
    question: "Why are peatlands important to protect?",
    answer: "Peatlands are critical carbon sinks, storing twice as much carbon as all forests combined despite covering only 3% of Earth's land surface. They're also unique habitats for specialized plants and animals, and they help regulate water flow and prevent flooding.",
    category: "conservation"
  },
  {
    id: 5,
    question: "How does purchasing purun products help conservation?",
    answer: "By purchasing purun products, you create economic incentives for communities to maintain healthy peatlands rather than converting them to other uses. A portion of all sales also directly funds our peatland restoration and protection programs.",
    category: "conservation"
  },
  {
    id: 6,
    question: "Do you ship internationally?",
    answer: "Yes, we ship our products worldwide. International shipping rates vary by location. Please note that there may be additional customs fees depending on your country's import regulations.",
    category: "general"
  },
  {
    id: 7,
    question: "Can I become a reseller of your products?",
    answer: "Absolutely! We welcome partnerships with like-minded businesses and individuals. Please visit our Contact page to inquire about our wholesale programs and reseller opportunities.",
    category: "general"
  },
  {
    id: 8,
    question: "How can I get involved in peatland conservation beyond purchasing products?",
    answer: "There are many ways to get involved! You can volunteer for our conservation programs, participate in awareness campaigns, donate directly to restoration efforts, or even adopt a hectare of peatland. Contact us to learn more about these opportunities.",
    category: "conservation"
  },
];