import { Project, Post, Update } from './types';

export const PROJECTS: Project[] = [
  {
    slug: 'shopflix',
    title: 'Shopflix.gr',
    year: '2024',
    description: 'A comprehensive design system and UI overhaul for one of Greece\'s leading marketplaces.',
    role: 'Lead Product Designer',
    background: 'Redesigning the core shopping experience to improve conversion rates and consolidate disparate UI patterns.',
    outcome: '20% increase in checkout completions and faster development cycles.',
    mainImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288569-ee50f1f44529?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['E-Commerce', 'Product Design']
  },
  {
    slug: 'veloce',
    title: 'Veloce',
    year: '2024',
    description: 'Premium urban mobility platform for high-end electric bike rentals.',
    role: 'Lead Mobile Designer',
    background: 'Disrupting the budget rental market with a premium app that feels as smooth as the ride.',
    outcome: 'Launched in 3 major cities with 45% user retention.',
    mainImage: 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Mobile App', 'IoT']
  },
  {
    slug: 'airboxr',
    title: 'Airboxr',
    year: '2023',
    description: 'Data-to-dashboard tool for e-commerce marketers.',
    role: 'Product Designer',
    background: '0-to-1 design approach for a complex data aggregation platform.',
    outcome: 'Reduced user churn by 15% in the first quarter post-launch.',
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['SaaS', '0→1 Design']
  },
  {
    slug: 'healthsync',
    title: 'HealthSync',
    year: '2023',
    description: 'Unified health data visualization platform for athletes.',
    role: 'UI/UX Designer',
    background: 'Aggregating wearable data from Apple, Oura, and Garmin into one view.',
    outcome: 'Adopted by 2 olympic training facilities.',
    mainImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Health Tech', 'Analytics']
  },
  {
    slug: 'ecotrack',
    title: 'EcoTrack',
    year: '2022',
    description: 'B2B SaaS helping corporations track carbon footprint.',
    role: 'UI/UX Designer',
    background: 'Visualizing complex supply chain emissions data.',
    outcome: 'Onboarded 5 Fortune 500 companies.',
    mainImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400'
    ],
    tags: ['CleanTech', 'Dashboard']
  },
  {
    slug: 'concept-aura',
    title: 'Aura',
    year: '2024',
    description: 'A experimental minimalist weather application concept.',
    role: 'Creative Designer',
    background: 'Exploring the boundary between information and abstract art.',
    outcome: 'Featured on multiple design inspiration boards.',
    mainImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
    ],
    tags: ['Concept', 'Abstract UI']
  }
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'The Anatomy of a Design System',
    summary: 'Diving deep into the components, principles, and practices that make a design system successful.',
    date: 'April 15, 2024',
    readTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800',
    tags: ['Design', 'UX']
  },
  {
    id: '2',
    title: 'Pixels to Code',
    summary: 'Exploring the benefits and challenges of bridging the gap between design and development.',
    date: 'March 22, 2024',
    readTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
    tags: ['Code', 'Engineering']
  }
];

export const UPDATES: Update[] = [
  {
    date: 'OCT 2023 - NOW',
    title: 'Lead UI Designer at TechNova',
    content: 'Leading the redesign of our flagship analytics dashboard. My focus is on improving data visualization and creating a more intuitive user flow.'
  }
];

export const TOOL_LOGOS = [
  { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/white' },
  { name: 'WordPress', url: 'https://cdn.simpleicons.org/wordpress/white' },
  { name: 'Framer', url: 'https://cdn.simpleicons.org/framer/white' },
  { name: 'Shopify', url: 'https://cdn.simpleicons.org/shopify/white' },
  { name: 'Illustrator', url: 'https://cdn.simpleicons.org/adobeillustrator/white' },
  { name: 'Canva', url: 'https://cdn.simpleicons.org/canva/white' },
  { name: 'Photoshop', url: 'https://cdn.simpleicons.org/adobephotoshop/white' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/white' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'Webflow', url: 'https://cdn.simpleicons.org/webflow/white' },
];

export const CERTIFICATIONS = [
  {
    title: "Google UX Design Professional",
    issuer: "Coursera / Google",
    year: "2023",
    icon: "verified"
  },
  {
    title: "Advanced React & TypeScript",
    issuer: "Frontend Masters",
    year: "2024",
    icon: "code"
  },
  {
    title: "Visual Design & Identity",
    issuer: "Interaction Design Foundation",
    year: "2022",
    icon: "palette"
  }
];
