import { Project, Post, Update } from './types';

export const PROJECTS: Project[] = [
  {
    slug: 'attendance-leave-management',
    title: 'ATTENDANCE AND LEAVE MANAGEMENT',
    year: '2024',
    description: 'A comprehensive Figma project featuring a centralized hub for employer news and granular employee attendance tracking.',
    role: 'Lead UI/UX Designer',
    background: 'Designing a robust enterprise solution to bridge the gap between HR administration and employee self-service, focusing on complex attendance workflows.',
    outcome: 'Streamlined approval cycles and a 30% reduction in manual attendance logging errors.',
    mainImage: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1454165833767-027ff390432a?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Figma', 'Enterprise UI']
  },
  {
    slug: 'esi-event-organizer',
    title: 'ESI',
    year: '2024',
    description: 'A high-energy, visually stunning event organizer website designed in Figma for global scale conferences and networking.',
    role: 'Product Designer',
    background: 'Crafting a cool, immersive interface that handles complex scheduling and speaker management with a sleek, user-centric approach.',
    outcome: 'An optimized booking flow that increased pre-registration rates by 40% for major global events.',
    mainImage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1475721027185-39a1294d3016?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Figma', 'Event Tech']
  },
  {
    slug: 'the-belvoir-collection',
    title: 'The Belvoir Collection',
    year: '2024',
    description: 'The digital flagship for a premier consultancy and design firm, emphasizing luxury aesthetics and brand authority.',
    role: 'Creative Designer',
    background: 'Developing a minimal but powerful Figma identity for a high-end studio that defines luxury living and high-level design consultancy.',
    outcome: 'A distinguished web presence that successfully attracted Tier-1 corporate partners.',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Figma', 'Consultancy']
  },
  {
    slug: 'albalagh-academy',
    title: 'Albalagh Academy',
    year: '2023',
    description: 'A feature-rich Shopify e-commerce and educational platform tailored for global content distribution.',
    role: 'Full Stack Developer',
    background: 'Migrating an established educational legacy to a robust, scalable Shopify infrastructure to handle global student intake.',
    outcome: 'Successfully onboarded 50k+ students with a 99.9% uptime during peak course launches.',
    mainImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Shopify', 'EdTech']
  },
  {
    slug: 'radiant-beauty-wp',
    title: 'Radiant Beauty Store',
    year: '2023',
    description: 'A bespoke WordPress e-commerce solution for high-growth cosmetics firms requiring dynamic content management.',
    role: 'WP Developer',
    background: 'Building a high-performance WordPress site focused on SEO and rapid page speed for a premium beauty brand.',
    outcome: 'Achieved a Lighthouse score of 98+ and improved organic traffic by 25%.',
    mainImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['WordPress', 'E-commerce']
  },
  {
    slug: 'horizon-real-estate-wp',
    title: 'Horizon Real Estate',
    year: '2022',
    description: 'Custom WordPress publication for modern luxury real estate journals and property listings.',
    role: 'UI Designer & Dev',
    background: 'Creating a grid-breaking layout that prioritizes high-resolution property imagery and seamless navigation for buyers.',
    outcome: 'Average user session duration increased by 45% through improved property discovery.',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['WordPress', 'Real Estate']
  },
  {
    slug: 'pulse-fitness-wp',
    title: 'Pulse Fitness Hub',
    year: '2022',
    description: 'A heavy-duty WordPress platform for a pan-Indian fitness and health chain.',
    role: 'Lead Developer',
    background: 'Integrating real-time membership management and scheduling within a user-friendly WordPress dashboard.',
    outcome: 'Reduced support tickets by 20% through automated membership self-service portals.',
    mainImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
    screenshots: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['WordPress', 'Health']
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
