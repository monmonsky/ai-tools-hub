export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  logo: string;
  website: string;
  pricing: 'free' | 'paid' | 'freemium';
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'AI Assistant',
    slug: 'ai-assistant',
    description: 'Intelligent chatbots and virtual assistants'
  },
  {
    id: '2',
    name: 'Image Generation',
    slug: 'image-generation',
    description: 'AI-powered image creation and editing tools'
  },
  {
    id: '3',
    name: 'Code',
    slug: 'code',
    description: 'AI coding assistants and development tools'
  },
  {
    id: '4',
    name: 'Writing',
    slug: 'writing',
    description: 'AI writing assistants and content generation'
  },
  {
    id: '5',
    name: 'Audio',
    slug: 'audio',
    description: 'Voice synthesis and audio processing tools'
  },
  {
    id: '6',
    name: 'Video',
    slug: 'video',
    description: 'AI video creation and editing platforms'
  }
];

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    slug: 'chatgpt',
    description: 'Advanced AI chatbot for conversations, writing, coding, and problem-solving with natural language understanding.',
    category: 'AI Assistant',
    logo: '/logos/chatgpt.png',
    website: 'https://chat.openai.com',
    pricing: 'freemium',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    description: 'Anthropic\'s AI assistant focused on being helpful, harmless, and honest with advanced reasoning capabilities.',
    category: 'AI Assistant',
    logo: '/logos/claude.png',
    website: 'https://claude.ai',
    pricing: 'freemium',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Midjourney',
    slug: 'midjourney',
    description: 'Premium AI image generator creating stunning artwork and illustrations from text descriptions.',
    category: 'Image Generation',
    logo: '/logos/midjourney.png',
    website: 'https://midjourney.com',
    pricing: 'paid',
    rating: 4.9
  },
  {
    id: '4',
    name: 'DALL-E',
    slug: 'dall-e',
    description: 'OpenAI\'s revolutionary image generation AI that creates images from textual descriptions.',
    category: 'Image Generation',
    logo: '/logos/dalle.png',
    website: 'https://openai.com/dall-e-2',
    pricing: 'paid',
    rating: 4.6
  },
  {
    id: '5',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: 'AI pair programmer that helps write code faster with intelligent code suggestions and completions.',
    category: 'Code',
    logo: '/logos/copilot.png',
    website: 'https://github.com/features/copilot',
    pricing: 'paid',
    rating: 4.5
  },
  {
    id: '6',
    name: 'Jasper',
    slug: 'jasper',
    description: 'AI writing assistant for marketing copy, blog posts, and content creation with brand voice training.',
    category: 'Writing',
    logo: '/logos/jasper.png',
    website: 'https://jasper.ai',
    pricing: 'paid',
    rating: 4.4
  },
  {
    id: '7',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    description: 'Advanced AI voice synthesis platform for creating realistic speech and voice cloning.',
    category: 'Audio',
    logo: '/logos/elevenlabs.png',
    website: 'https://elevenlabs.io',
    pricing: 'freemium',
    rating: 4.8
  },
  {
    id: '8',
    name: 'Runway',
    slug: 'runway',
    description: 'AI-powered video editing and generation platform for creative professionals and content creators.',
    category: 'Video',
    logo: '/logos/runway.png',
    website: 'https://runwayml.com',
    pricing: 'freemium',
    rating: 4.3
  },
  {
    id: '9',
    name: 'Perplexity',
    slug: 'perplexity',
    description: 'AI-powered search engine that provides direct answers with sources and real-time information.',
    category: 'AI Assistant',
    logo: '/logos/perplexity.png',
    website: 'https://perplexity.ai',
    pricing: 'freemium',
    rating: 4.6
  },
  {
    id: '10',
    name: 'Cursor',
    slug: 'cursor',
    description: 'AI-first code editor built for pair programming with AI, featuring intelligent code generation.',
    category: 'Code',
    logo: '/logos/cursor.png',
    website: 'https://cursor.sh',
    pricing: 'freemium',
    rating: 4.7
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