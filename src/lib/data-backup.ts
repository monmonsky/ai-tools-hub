export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  category: string;
  logo: string;
  website: string;
  pricing: 'free' | 'paid' | 'freemium';
  pricingDetails: {
    free?: string;
    paid?: string;
    enterprise?: string;
  };
  rating: number;
  features: string[];
  pros: string[];
  cons: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'AI Assistant',
    slug: 'ai-assistant',
    description: 'Chatbot cerdas dan asisten virtual',
    icon: 'MessageCircle'
  },
  {
    id: '2',
    name: 'Image Generation',
    slug: 'image-generation',
    description: 'Tools pembuatan dan editing gambar berbasis AI',
    icon: 'Image'
  },
  {
    id: '3',
    name: 'Code',
    slug: 'code',
    description: 'Asisten coding AI dan tools development',
    icon: 'Code'
  },
  {
    id: '4',
    name: 'Writing',
    slug: 'writing',
    description: 'Asisten penulisan AI dan pembuatan konten',
    icon: 'PenTool'
  },
  {
    id: '5',
    name: 'Audio',
    slug: 'audio',
    description: 'Sintesis suara dan tools pemrosesan audio',
    icon: 'Mic'
  },
  {
    id: '6',
    name: 'Video',
    slug: 'video',
    description: 'Platform pembuatan dan editing video AI',
    icon: 'Video'
  },
  {
    id: '7',
    name: 'Business',
    slug: 'business',
    description: 'Tools AI untuk produktivitas dan bisnis',
    icon: 'Briefcase'
  },
  {
    id: '8',
    name: 'Data & Analytics',
    slug: 'data-analytics',
    description: 'Analisis data dan business intelligence AI',
    icon: 'BarChart'
  },
  {
    id: '9',
    name: 'Design',
    slug: 'design',
    description: 'Tools desain grafis dan UI/UX berbasis AI',
    icon: 'Palette'
  },
  {
    id: '10',
    name: 'Marketing',
    slug: 'marketing',
    description: 'AI tools untuk marketing dan advertising',
    icon: 'Target'
  }
];

export const tools: Tool[] = [
  // AI Assistant Tools
  {
    id: '1',
    name: 'ChatGPT',
    slug: 'chatgpt',
    description: 'Chatbot AI canggih untuk percakapan, penulisan, coding, dan pemecahan masalah dengan pemahaman bahasa natural.',
    fullDescription: 'ChatGPT adalah AI percakapan revolusioner dari OpenAI yang mengubah cara kita berinteraksi dengan kecerdasan buatan. Dibangun dengan arsitektur GPT, sangat unggul dalam memahami konteks, menghasilkan respons seperti manusia, dan membantu berbagai tugas dari penulisan kreatif hingga pemecahan masalah kompleks.',
    category: 'AI Assistant',
    logo: '/logos/chatgpt.png',
    website: 'https://chat.openai.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Akses ke GPT-3.5, kecepatan respons standar',
      paid: '$20/bulan - Akses GPT-4, respons lebih cepat, akses prioritas',
      enterprise: 'Harga khusus untuk bisnis dan tim'
    },
    rating: 4.8,
    features: [
      'Percakapan bahasa natural',
      'Generasi dan debugging kode',
      'Bantuan penulisan kreatif',
      'Masalah matematika dan penalaran',
      'Terjemahan bahasa',
      'Ringkasan dan analisis',
      'Instruksi kustom',
      'Ekosistem plugin'
    ],
    pros: [
      'Sangat serbaguna dan mudah beradaptasi',
      'Sangat baik dalam memahami konteks',
      'Terus diperbarui dan ditingkatkan',
      'Basis pengetahuan yang luas',
      'Bagus untuk pembelajaran dan edukasi'
    ],
    cons: [
      'Dapat menghasilkan informasi yang masuk akal tapi salah',
      'Informasi real-time terbatas',
      'Batas penggunaan pada tier gratis',
      'Mungkin kesulitan dengan peristiwa terbaru'
    ]
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    description: 'Anthropic\'s AI assistant focused on being helpful, harmless, and honest with advanced reasoning capabilities.',
    fullDescription: 'Claude is Anthropic\'s AI assistant built with a focus on safety, helpfulness, and honesty. It excels at complex reasoning, analysis, and maintaining coherent conversations while being transparent about its limitations. Claude is particularly strong at tasks requiring careful thinking, ethical reasoning, and nuanced understanding of context.',
    category: 'AI Assistant',
    logo: '/logos/claude.png',
    website: 'https://claude.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited conversations per day',
      paid: '$20/month - Claude Pro with higher usage limits',
      enterprise: 'Claude for Work with team features'
    },
    rating: 4.7,
    features: [
      'Advanced reasoning and analysis',
      'Long-form content creation',
      'Code analysis and generation',
      'Research and summarization',
      'Ethical reasoning',
      'Multi-language support',
      'Document analysis',
      'Mathematical problem solving'
    ],
    pros: [
      'Excellent at complex reasoning',
      'Strong safety and ethical guidelines',
      'Honest about limitations',
      'Great for research and analysis',
      'Handles long conversations well'
    ],
    cons: [
      'More conservative responses',
      'Limited availability in some regions',
      'Smaller plugin ecosystem',
      'Usage limits on free tier'
    ]
  },
  {
    id: '3',
    name: 'Midjourney',
    slug: 'midjourney',
    description: 'Premium AI image generator creating stunning artwork and illustrations from text descriptions.',
    fullDescription: 'Midjourney is a leading AI image generation platform known for producing artistic, high-quality images with unique aesthetic styles. Operating through Discord, it has become the go-to choice for artists, designers, and creatives looking to generate stunning visual content from text prompts.',
    category: 'Image Generation',
    logo: '/logos/midjourney.png',
    website: 'https://midjourney.com',
    pricing: 'paid',
    pricingDetails: {
      paid: '$10/month - Basic plan with 200 generations',
      enterprise: '$60/month - Pro plan with unlimited relaxed generations'
    },
    rating: 4.9,
    features: [
      'High-quality artistic image generation',
      'Multiple art styles and aesthetics',
      'Aspect ratio control',
      'Style parameters and seeds',
      'Image variations and upscaling',
      'Blend and remix features',
      'Community gallery',
      'Discord integration'
    ],
    pros: [
      'Exceptional artistic quality',
      'Unique and creative outputs',
      'Strong community and inspiration',
      'Regular updates and improvements',
      'Great for artistic projects'
    ],
    cons: [
      'Discord-only interface',
      'No free tier available',
      'Limited control over specific details',
      'Can be unpredictable'
    ]
  },
  {
    id: '4',
    name: 'DALL-E',
    slug: 'dall-e',
    description: 'OpenAI\'s revolutionary image generation AI that creates images from textual descriptions.',
    fullDescription: 'DALL-E 2 by OpenAI is a powerful AI system that can create realistic images and art from natural language descriptions. It combines concepts, attributes, and styles to generate original, realistic images that don\'t exist anywhere else.',
    category: 'Image Generation',
    logo: '/logos/dalle.png',
    website: 'https://openai.com/dall-e-2',
    pricing: 'paid',
    pricingDetails: {
      paid: '$15 for 115 credits - Credits never expire'
    },
    rating: 4.6,
    features: ['Text-to-image generation', 'Image editing and inpainting', 'Style variations', 'High resolution outputs'],
    pros: ['High-quality realistic images', 'Easy to use interface', 'Precise prompt following'],
    cons: ['Credit-based pricing', 'Content policy restrictions', 'Limited art styles']
  },
  {
    id: '5',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: 'AI pair programmer that helps write code faster with intelligent code suggestions and completions.',
    fullDescription: 'GitHub Copilot is an AI coding assistant that helps developers write code faster and with fewer errors. Powered by OpenAI Codex, it provides intelligent code completions and suggestions directly in your IDE.',
    category: 'Code',
    logo: '/logos/copilot.png',
    website: 'https://github.com/features/copilot',
    pricing: 'paid',
    pricingDetails: { paid: '$10/month per user, $19/month for businesses' },
    rating: 4.5,
    features: ['Code completions', 'Function generation', 'Multiple language support', 'IDE integration'],
    pros: ['Saves development time', 'Great IDE integration', 'Learns from context'],
    cons: ['Subscription required', 'Sometimes generates incorrect code', 'Privacy concerns']
  },
  {
    id: '6',
    name: 'Jasper',
    slug: 'jasper',
    description: 'AI writing assistant for marketing copy, blog posts, and content creation with brand voice training.',
    fullDescription: 'Jasper is an AI writing platform designed for businesses and marketers to create high-quality content at scale. It specializes in marketing copy, blog posts, and brand-consistent content.',
    category: 'Writing',
    logo: '/logos/jasper.png',
    website: 'https://jasper.ai',
    pricing: 'paid',
    pricingDetails: { paid: 'Starting at $49/month for unlimited words' },
    rating: 4.4,
    features: ['Marketing copy generation', 'Brand voice training', 'Template library', 'Team collaboration'],
    pros: ['Great for marketing content', 'Brand voice consistency', 'Team features'],
    cons: ['Expensive for individuals', 'No free tier', 'Learning curve']
  },
  {
    id: '7',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    description: 'Advanced AI voice synthesis platform for creating realistic speech and voice cloning.',
    fullDescription: 'ElevenLabs provides cutting-edge AI voice technology for creating natural-sounding speech from text. It offers voice cloning, multilingual support, and high-quality voice generation.',
    category: 'Audio',
    logo: '/logos/elevenlabs.png',
    website: 'https://elevenlabs.io',
    pricing: 'freemium',
    pricingDetails: { free: '10,000 characters/month', paid: 'Starting at $5/month for 30,000 characters' },
    rating: 4.8,
    features: ['Voice cloning', 'Text-to-speech', 'Multilingual support', 'API access'],
    pros: ['Extremely realistic voices', 'Voice cloning capability', 'API integration'],
    cons: ['Usage limits on free tier', 'Ethical concerns with voice cloning', 'Limited free characters']
  },
  {
    id: '8',
    name: 'Runway',
    slug: 'runway',
    description: 'AI-powered video editing and generation platform for creative professionals and content creators.',
    fullDescription: 'Runway offers AI-powered creative tools for video generation, editing, and enhancement. It provides cutting-edge AI models for content creators and filmmakers.',
    category: 'Video',
    logo: '/logos/runway.png',
    website: 'https://runwayml.com',
    pricing: 'freemium',
    pricingDetails: { free: 'Limited credits', paid: 'Starting at $12/month' },
    rating: 4.3,
    features: ['AI video generation', 'Background removal', 'Motion tracking', 'Style transfer'],
    pros: ['Cutting-edge AI video tools', 'Professional features', 'Regular updates'],
    cons: ['Steep learning curve', 'Credit-based system', 'Resource intensive']
  },
  {
    id: '9',
    name: 'Perplexity',
    slug: 'perplexity',
    description: 'AI-powered search engine that provides direct answers with sources and real-time information.',
    fullDescription: 'Perplexity AI is a conversational search engine that provides accurate answers with cited sources. It combines the power of AI with real-time web search to deliver comprehensive information.',
    category: 'AI Assistant',
    logo: '/logos/perplexity.png',
    website: 'https://perplexity.ai',
    pricing: 'freemium',
    pricingDetails: { free: 'Limited queries', paid: '$20/month for unlimited pro searches' },
    rating: 4.6,
    features: ['Real-time search', 'Source citations', 'Follow-up questions', 'Mobile app'],
    pros: ['Always up-to-date information', 'Cites sources', 'Great for research'],
    cons: ['Limited free queries', 'Sometimes slower than Google', 'May miss context']
  },
  {
    id: '10',
    name: 'Cursor',
    slug: 'cursor',
    description: 'AI-first code editor built for pair programming with AI, featuring intelligent code generation.',
    fullDescription: 'Cursor is an AI-powered code editor designed for seamless AI-human collaboration. Built from the ground up with AI integration, it offers a new way to write and edit code.',
    category: 'Code',
    logo: '/logos/cursor.png',
    website: 'https://cursor.sh',
    pricing: 'freemium',
    pricingDetails: { free: 'Limited AI requests', paid: '$20/month for unlimited usage' },
    rating: 4.7,
    features: ['AI pair programming', 'Natural language editing', 'Code generation', 'Smart completions'],
    pros: ['Native AI integration', 'Natural language commands', 'Modern interface'],
    cons: ['Still in development', 'Learning curve', 'Limited extensions']
  }
];

// Helper functions
export const getToolsByCategory = (categorySlug: string): Tool[] => {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return tools.filter(tool => tool.category === category.name);
};

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const searchTools = (query: string): Tool[] => {
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(tool =>
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  );
};