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
  // AI Assistant Tools (1-15)
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
    features: ['Percakapan bahasa natural', 'Generasi dan debugging kode', 'Bantuan penulisan kreatif', 'Masalah matematika dan penalaran', 'Terjemahan bahasa', 'Ringkasan dan analisis'],
    pros: ['Sangat serbaguna dan mudah beradaptasi', 'Sangat baik dalam memahami konteks', 'Terus diperbarui dan ditingkatkan'],
    cons: ['Dapat menghasilkan informasi yang masuk akal tapi salah', 'Informasi real-time terbatas', 'Batas penggunaan pada tier gratis']
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    description: 'Asisten AI dari Anthropic yang fokus pada keamanan, kegunaan, dan kejujuran dengan kemampuan penalaran canggih.',
    fullDescription: 'Claude adalah asisten AI dari Anthropic yang dibangun dengan fokus pada keamanan, kegunaan, dan kejujuran. Sangat unggul dalam penalaran kompleks, analisis, dan mempertahankan percakapan yang koheren sambil transparan tentang keterbatasannya.',
    category: 'AI Assistant',
    logo: '/logos/claude.png',
    website: 'https://claude.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Percakapan terbatas per hari',
      paid: '$20/bulan - Claude Pro dengan batas penggunaan lebih tinggi',
      enterprise: 'Claude for Work dengan fitur tim'
    },
    rating: 4.7,
    features: ['Penalaran dan analisis canggih', 'Pembuatan konten bentuk panjang', 'Analisis dan generasi kode', 'Penelitian dan ringkasan', 'Penalaran etis', 'Dukungan multi-bahasa'],
    pros: ['Sangat baik dalam penalaran kompleks', 'Pedoman keamanan dan etika yang kuat', 'Jujur tentang keterbatasan'],
    cons: ['Respons lebih konservatif', 'Ketersediaan terbatas di beberapa wilayah', 'Ekosistem plugin lebih kecil']
  },
  {
    id: '3',
    name: 'Google Bard',
    slug: 'google-bard',
    description: 'AI percakapan dari Google yang dapat mengakses informasi real-time dan terintegrasi dengan layanan Google.',
    fullDescription: 'Google Bard adalah chatbot AI percakapan yang dikembangkan oleh Google, didasarkan pada model bahasa PaLM. Dapat mengakses informasi terkini dari internet dan terintegrasi dengan ekosistem Google.',
    category: 'AI Assistant',
    logo: '/logos/bard.png',
    website: 'https://bard.google.com',
    pricing: 'free',
    pricingDetails: {
      free: 'Akses penuh gratis dengan akun Google'
    },
    rating: 4.3,
    features: ['Akses informasi real-time', 'Integrasi dengan Google Workspace', 'Pencarian web terintegrasi', 'Dukungan multi-bahasa', 'Generasi kode', 'Analisis gambar'],
    pros: ['Informasi terkini dari web', 'Integrasi mendalam dengan layanan Google', 'Gratis untuk digunakan'],
    cons: ['Masih dalam tahap pengembangan', 'Terkadang memberikan informasi yang tidak akurat', 'Ketersediaan terbatas di beberapa negara']
  },
  {
    id: '4',
    name: 'Microsoft Copilot',
    slug: 'microsoft-copilot',
    description: 'Asisten AI dari Microsoft yang terintegrasi dengan Office 365 dan layanan Microsoft lainnya.',
    fullDescription: 'Microsoft Copilot adalah asisten AI yang terintegrasi dengan produk Microsoft, membantu meningkatkan produktivitas dalam Word, Excel, PowerPoint, dan aplikasi Microsoft lainnya.',
    category: 'AI Assistant',
    logo: '/logos/copilot.png',
    website: 'https://copilot.microsoft.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Fitur dasar dengan batasan',
      paid: '$30/bulan per pengguna untuk Microsoft 365 Copilot'
    },
    rating: 4.4,
    features: ['Integrasi Office 365', 'Bantuan penulisan dokumen', 'Analisis data Excel', 'Pembuatan presentasi', 'Email otomatis', 'Ringkasan meeting'],
    pros: ['Integrasi seamless dengan Microsoft Office', 'Meningkatkan produktivitas kerja', 'Fitur kolaborasi tim'],
    cons: ['Memerlukan langganan Microsoft 365', 'Terbatas pada ekosistem Microsoft', 'Harga cukup mahal']
  },
  {
    id: '5',
    name: 'Perplexity',
    slug: 'perplexity',
    description: 'Mesin pencari AI yang memberikan jawaban langsung dengan sumber dan informasi real-time.',
    fullDescription: 'Perplexity AI adalah mesin pencari percakapan yang memberikan jawaban akurat dengan sumber yang dikutip. Menggabungkan kekuatan AI dengan pencarian web real-time untuk memberikan informasi komprehensif.',
    category: 'AI Assistant',
    logo: '/logos/perplexity.png',
    website: 'https://perplexity.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Query terbatas',
      paid: '$20/bulan untuk pencarian pro tanpa batas'
    },
    rating: 4.6,
    features: ['Pencarian real-time', 'Kutipan sumber', 'Pertanyaan lanjutan', 'Aplikasi mobile', 'Mode fokus', 'Ekspor hasil'],
    pros: ['Informasi selalu up-to-date', 'Mengutip sumber', 'Bagus untuk penelitian'],
    cons: ['Query gratis terbatas', 'Terkadang lebih lambat dari Google', 'Mungkin kehilangan konteks']
  },

  // Image Generation Tools (6-20)
  {
    id: '6',
    name: 'Midjourney',
    slug: 'midjourney',
    description: 'Generator gambar AI premium yang menciptakan artwork dan ilustrasi menakjubkan dari deskripsi teks.',
    fullDescription: 'Midjourney adalah platform generasi gambar AI terdepan yang dikenal menghasilkan gambar artistik berkualitas tinggi dengan gaya estetika unik. Beroperasi melalui Discord, menjadi pilihan utama untuk seniman, desainer, dan kreatif.',
    category: 'Image Generation',
    logo: '/logos/midjourney.png',
    website: 'https://midjourney.com',
    pricing: 'paid',
    pricingDetails: {
      paid: '$10/bulan - Paket Basic dengan 200 generasi',
      enterprise: '$60/bulan - Paket Pro dengan generasi relaxed unlimited'
    },
    rating: 4.9,
    features: ['Generasi gambar artistik berkualitas tinggi', 'Multiple gaya seni dan estetika', 'Kontrol aspect ratio', 'Parameter gaya dan seed', 'Variasi dan upscaling gambar', 'Fitur blend dan remix'],
    pros: ['Kualitas artistik luar biasa', 'Output unik dan kreatif', 'Komunitas kuat dan inspiratif'],
    cons: ['Interface hanya Discord', 'Tidak ada tier gratis', 'Kontrol detail terbatas']
  },
  {
    id: '7',
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    description: 'Sistem AI revolusioner OpenAI yang membuat gambar dari deskripsi tekstual.',
    fullDescription: 'DALL-E 3 oleh OpenAI adalah sistem AI yang dapat membuat gambar realistis dan seni dari deskripsi bahasa natural. Menggabungkan konsep, atribut, dan gaya untuk menghasilkan gambar original dan realistis.',
    category: 'Image Generation',
    logo: '/logos/dalle.png',
    website: 'https://openai.com/dall-e-3',
    pricing: 'paid',
    pricingDetails: {
      paid: '$15 untuk 115 kredit - Kredit tidak pernah kedaluwarsa'
    },
    rating: 4.6,
    features: ['Generasi text-to-image', 'Image editing dan inpainting', 'Variasi gaya', 'Output resolusi tinggi', 'Integrasi ChatGPT', 'Prompt yang lebih natural'],
    pros: ['Gambar realistis berkualitas tinggi', 'Interface mudah digunakan', 'Mengikuti prompt dengan presisi'],
    cons: ['Sistem berbasis kredit', 'Pembatasan kebijakan konten', 'Gaya seni terbatas']
  },
  {
    id: '8',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    description: 'Model generasi gambar AI open-source yang dapat dijalankan secara lokal dengan kontrol penuh.',
    fullDescription: 'Stable Diffusion adalah model generasi gambar AI open-source yang memungkinkan pengguna untuk menjalankannya secara lokal. Menawarkan kontrol penuh atas proses generasi dan dapat dikustomisasi.',
    category: 'Image Generation',
    logo: '/logos/stablediffusion.png',
    website: 'https://stability.ai',
    pricing: 'free',
    pricingDetails: {
      free: 'Model open-source, gratis untuk digunakan'
    },
    rating: 4.4,
    features: ['Open-source dan gratis', 'Dapat dijalankan lokal', 'Kontrol parameter detail', 'Community models', 'Inpainting dan outpainting', 'Multiple interfaces'],
    pros: ['Gratis dan open-source', 'Kontrol penuh atas output', 'Komunitas aktif'],
    cons: ['Membutuhkan pengetahuan teknis', 'Perlu hardware yang powerful', 'Setup awal kompleks']
  },
  {
    id: '9',
    name: 'Leonardo AI',
    slug: 'leonardo-ai',
    description: 'Platform generasi gambar AI dengan fokus pada game assets, karakter, dan desain kreatif.',
    fullDescription: 'Leonardo AI adalah platform yang dirancang khusus untuk membuat game assets, karakter, dan elemen desain kreatif menggunakan teknologi AI generative.',
    category: 'Image Generation',
    logo: '/logos/leonardo.png',
    website: 'https://leonardo.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: '150 kredit per hari',
      paid: 'Mulai dari $10/bulan untuk kredit tambahan'
    },
    rating: 4.5,
    features: ['Generasi game assets', 'Pembuatan karakter', 'Multiple art styles', 'Image upscaling', 'Canvas editor', 'Community models'],
    pros: ['Fokus pada konten game', 'Interface user-friendly', 'Tier gratis yang baik'],
    cons: ['Kurang versatile untuk use case umum', 'Masih relatif baru', 'Beberapa fitur dalam beta']
  },
  {
    id: '10',
    name: 'Adobe Firefly',
    slug: 'adobe-firefly',
    description: 'Generator gambar AI dari Adobe yang terintegrasi dengan Creative Cloud untuk professional creators.',
    fullDescription: 'Adobe Firefly adalah keluarga model AI kreatif dari Adobe yang dirancang untuk terintegrasi dengan produk Creative Cloud, memberikan kemampuan generasi konten yang aman untuk penggunaan komersial.',
    category: 'Image Generation',
    logo: '/logos/firefly.png',
    website: 'https://firefly.adobe.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '25 kredit per bulan',
      paid: 'Termasuk dalam langganan Creative Cloud'
    },
    rating: 4.3,
    features: ['Integrasi Creative Cloud', 'Text-to-image', 'Text effects', 'Recolor artwork', 'Safe for commercial use', 'Vector generation'],
    pros: ['Aman untuk penggunaan komersial', 'Integrasi dengan Adobe products', 'Kualitas professional'],
    cons: ['Memerlukan langganan Adobe', 'Fitur masih terbatas', 'Harga cukup mahal']
  },

  // Code Tools (11-25)
  {
    id: '11',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: 'AI pair programmer yang membantu menulis kode lebih cepat dengan saran dan completion cerdas.',
    fullDescription: 'GitHub Copilot adalah asisten coding AI yang membantu developer menulis kode lebih cepat dan dengan lebih sedikit error. Didukung oleh OpenAI Codex, memberikan completion dan saran kode cerdas langsung di IDE.',
    category: 'Code',
    logo: '/logos/copilot.png',
    website: 'https://github.com/features/copilot',
    pricing: 'paid',
    pricingDetails: {
      paid: '$10/bulan per pengguna, $19/bulan untuk bisnis'
    },
    rating: 4.5,
    features: ['Code completions', 'Function generation', 'Dukungan multiple bahasa', 'Integrasi IDE', 'Context-aware suggestions', 'Code explanation'],
    pros: ['Menghemat waktu development', 'Integrasi IDE yang bagus', 'Belajar dari konteks'],
    cons: ['Memerlukan langganan', 'Terkadang menghasilkan kode yang salah', 'Concerns privasi']
  },
  {
    id: '12',
    name: 'Cursor',
    slug: 'cursor',
    description: 'Editor kode AI-first yang dibangun untuk pair programming dengan AI, dengan generasi kode intelligent.',
    fullDescription: 'Cursor adalah editor kode yang didukung AI dan dirancang untuk kolaborasi seamless antara AI dan manusia. Dibangun dari ground up dengan integrasi AI, menawarkan cara baru untuk menulis dan mengedit kode.',
    category: 'Code',
    logo: '/logos/cursor.png',
    website: 'https://cursor.sh',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Request AI terbatas',
      paid: '$20/bulan untuk penggunaan unlimited'
    },
    rating: 4.7,
    features: ['AI pair programming', 'Natural language editing', 'Code generation', 'Smart completions', 'Multi-file editing', 'Git integration'],
    pros: ['Integrasi AI native', 'Perintah bahasa natural', 'Interface modern'],
    cons: ['Masih dalam development', 'Learning curve', 'Extension terbatas']
  },
  {
    id: '13',
    name: 'Tabnine',
    slug: 'tabnine',
    description: 'AI assistant untuk developer yang memberikan code completion dan suggestion yang akurat.',
    fullDescription: 'Tabnine adalah AI assistant yang membantu developer dengan memberikan code completion yang akurat dan context-aware. Mendukung berbagai bahasa pemrograman dan IDE.',
    category: 'Code',
    logo: '/logos/tabnine.png',
    website: 'https://tabnine.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic completions',
      paid: 'Mulai dari $12/bulan untuk advanced features'
    },
    rating: 4.2,
    features: ['Code completion', 'Multiple language support', 'IDE integration', 'Team training', 'Private models', 'Code patterns'],
    pros: ['Dukungan bahasa luas', 'Model private untuk tim', 'Akurasi tinggi'],
    cons: ['Interface kurang modern', 'Performa terkadang lambat', 'Harga cukup mahal untuk tim']
  },
  {
    id: '14',
    name: 'Replit Ghostwriter',
    slug: 'replit-ghostwriter',
    description: 'AI pair programmer terintegrasi dalam Replit IDE untuk coding collaborative dan pembelajaran.',
    fullDescription: 'Replit Ghostwriter adalah AI assistant yang terintegrasi langsung dalam Replit IDE, membantu dengan code generation, explanation, dan debugging dalam lingkungan cloud-based.',
    category: 'Code',
    logo: '/logos/replit.png',
    website: 'https://replit.com/ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Fitur dasar dengan batasan',
      paid: '$7/bulan untuk Ghostwriter Pro'
    },
    rating: 4.1,
    features: ['Code generation', 'Code explanation', 'Debug assistance', 'Cloud-based IDE', 'Collaborative coding', 'Multiple languages'],
    pros: ['Terintegrasi dengan cloud IDE', 'Bagus untuk pembelajaran', 'Harga terjangkau'],
    cons: ['Terbatas pada platform Replit', 'Fitur masih developing', 'Performa internet dependent']
  },
  {
    id: '15',
    name: 'CodeWhisperer',
    slug: 'codewhisperer',
    description: 'AI coding assistant dari Amazon yang memberikan real-time code suggestions dan security scanning.',
    fullDescription: 'Amazon CodeWhisperer adalah AI assistant yang memberikan code suggestions real-time berdasarkan komentar dan kode yang sudah ada. Juga menyediakan security scanning untuk vulnerabilities.',
    category: 'Code',
    logo: '/logos/codewhisperer.png',
    website: 'https://aws.amazon.com/codewhisperer',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Individual developers',
      paid: '$19/bulan untuk professional features'
    },
    rating: 4.0,
    features: ['Real-time suggestions', 'Security scanning', 'Reference tracking', 'Multiple IDE support', 'AWS integration', 'Bias detection'],
    pros: ['Security scanning built-in', 'Gratis untuk individual', 'AWS ecosystem integration'],
    cons: ['Fokus pada AWS ecosystem', 'Performa masih kalah dari competitors', 'UI/UX kurang refined']
  },

  // Writing Tools (16-30)
  {
    id: '16',
    name: 'Jasper',
    slug: 'jasper',
    description: 'AI writing assistant untuk marketing copy, blog posts, dan pembuatan konten dengan brand voice training.',
    fullDescription: 'Jasper adalah platform penulisan AI yang dirancang untuk bisnis dan marketer untuk membuat konten berkualitas tinggi dalam skala besar. Spesialisasi dalam marketing copy, blog posts, dan konten konsisten dengan brand.',
    category: 'Writing',
    logo: '/logos/jasper.png',
    website: 'https://jasper.ai',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $49/bulan untuk unlimited words'
    },
    rating: 4.4,
    features: ['Marketing copy generation', 'Brand voice training', 'Template library', 'Team collaboration', 'SEO optimization', 'Multiple languages'],
    pros: ['Bagus untuk konten marketing', 'Konsistensi brand voice', 'Fitur tim'],
    cons: ['Mahal untuk individual', 'Tidak ada tier gratis', 'Learning curve']
  },
  {
    id: '17',
    name: 'Copy.ai',
    slug: 'copy-ai',
    description: 'Platform AI writing yang membantu membuat copy marketing, social media, dan konten bisnis.',
    fullDescription: 'Copy.ai adalah platform yang menggunakan AI untuk membantu membuat berbagai jenis copy marketing, dari social media posts hingga email campaigns dan website copy.',
    category: 'Writing',
    logo: '/logos/copyai.png',
    website: 'https://copy.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: '2,000 words per bulan',
      paid: 'Mulai dari $36/bulan untuk unlimited'
    },
    rating: 4.2,
    features: ['Marketing copy templates', 'Social media content', 'Email campaigns', 'Blog post ideas', 'Product descriptions', 'Ad copy'],
    pros: ['Template yang banyak', 'Mudah digunakan', 'Tier gratis tersedia'],
    cons: ['Output kadang generic', 'Perlu editing manual', 'Limit ketat di free tier']
  },
  {
    id: '18',
    name: 'Writesonic',
    slug: 'writesonic',
    description: 'AI writing platform dengan Chatsonic chatbot dan tools untuk artikel, ads, dan konten e-commerce.',
    fullDescription: 'Writesonic adalah platform AI writing yang menawarkan berbagai tools untuk membuat artikel, iklan, dan konten e-commerce. Dilengkapi dengan Chatsonic, chatbot alternatif ChatGPT.',
    category: 'Writing',
    logo: '/logos/writesonic.png',
    website: 'https://writesonic.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '10,000 words per bulan',
      paid: 'Mulai dari $16/bulan'
    },
    rating: 4.3,
    features: ['Article writer', 'Chatsonic chatbot', 'Ad copy generator', 'E-commerce content', 'SEO optimization', 'Factual content'],
    pros: ['Fitur lengkap', 'Chatsonic included', 'Harga competitive'],
    cons: ['Interface agak cluttered', 'Kualitas output bervariasi', 'Customer support terbatas']
  },
  {
    id: '19',
    name: 'Grammarly',
    slug: 'grammarly',
    description: 'AI writing assistant yang membantu memperbaiki grammar, gaya penulisan, dan clarity.',
    fullDescription: 'Grammarly adalah AI writing assistant yang membantu meningkatkan kualitas tulisan dengan memperbaiki grammar, spelling, punctuation, clarity, dan engagement.',
    category: 'Writing',
    logo: '/logos/grammarly.png',
    website: 'https://grammarly.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic grammar dan spelling checks',
      paid: '$12/bulan untuk advanced features'
    },
    rating: 4.6,
    features: ['Grammar checking', 'Spell checking', 'Style suggestions', 'Tone detector', 'Plagiarism checker', 'Writing insights'],
    pros: ['Sangat akurat', 'Integrasi luas', 'Real-time feedback'],
    cons: ['Fitur advanced berbayar', 'Terkadang over-corrective', 'Fokus pada English']
  },
  {
    id: '20',
    name: 'Notion AI',
    slug: 'notion-ai',
    description: 'AI assistant terintegrasi dalam Notion untuk help writing, brainstorming, dan organizing ide.',
    fullDescription: 'Notion AI adalah assistant yang terintegrasi langsung dalam workspace Notion, membantu dengan writing, brainstorming, summarizing, dan organizing informasi.',
    category: 'Writing',
    logo: '/logos/notion.png',
    website: 'https://notion.so/ai',
    pricing: 'paid',
    pricingDetails: {
      paid: '$10/bulan per anggota sebagai add-on Notion'
    },
    rating: 4.1,
    features: ['Writing assistance', 'Brainstorming', 'Summarization', 'Translation', 'Action items extraction', 'Content generation'],
    pros: ['Integrasi seamless dengan Notion', 'Context-aware', 'Workflow optimization'],
    cons: ['Memerlukan langganan Notion', 'Fitur terbatas dibanding standalone tools', 'Add-on cost']
  },

  // Audio Tools (21-35)
  {
    id: '21',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    description: 'Platform sintesis suara AI canggih untuk menciptakan speech realistis dan voice cloning.',
    fullDescription: 'ElevenLabs menyediakan teknologi suara AI cutting-edge untuk membuat speech yang terdengar natural dari teks. Menawarkan voice cloning, dukungan multibahasa, dan generasi suara berkualitas tinggi.',
    category: 'Audio',
    logo: '/logos/elevenlabs.png',
    website: 'https://elevenlabs.io',
    pricing: 'freemium',
    pricingDetails: {
      free: '10,000 karakter/bulan',
      paid: 'Mulai dari $5/bulan untuk 30,000 karakter'
    },
    rating: 4.8,
    features: ['Voice cloning', 'Text-to-speech', 'Dukungan multibahasa', 'Akses API', 'Voice library', 'Real-time streaming'],
    pros: ['Suara sangat realistis', 'Kemampuan voice cloning', 'Integrasi API'],
    cons: ['Limit penggunaan di tier gratis', 'Ethical concerns dengan voice cloning', 'Karakter gratis terbatas']
  },
  {
    id: '22',
    name: 'Murf',
    slug: 'murf',
    description: 'Text-to-speech AI dengan library suara professional untuk video, podcast, dan presentasi.',
    fullDescription: 'Murf adalah platform text-to-speech yang menawarkan suara AI berkualitas studio untuk membuat voiceover professional untuk video, podcast, presentasi, dan konten audio lainnya.',
    category: 'Audio',
    logo: '/logos/murf.png',
    website: 'https://murf.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: '10 menit audio per bulan',
      paid: 'Mulai dari $19/bulan'
    },
    rating: 4.4,
    features: ['Professional voice library', 'Multi-language support', 'Voice customization', 'Background music', 'Script editor', 'Team collaboration'],
    pros: ['Kualitas suara professional', 'Interface user-friendly', 'Banyak pilihan suara'],
    cons: ['Harga cukup mahal', 'Limit ketat di free tier', 'Voice cloning tidak tersedia']
  },
  {
    id: '23',
    name: 'Speechify',
    slug: 'speechify',
    description: 'Text-to-speech app yang mengubah teks menjadi audio dengan suara natural untuk learning dan accessibility.',
    fullDescription: 'Speechify adalah aplikasi text-to-speech yang membantu orang membaca lebih cepat dengan mendengarkan. Menggunakan AI untuk menghasilkan suara natural dari dokumen, artikel, dan teks.',
    category: 'Audio',
    logo: '/logos/speechify.png',
    website: 'https://speechify.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Fitur dasar dengan batasan',
      paid: '$11.58/bulan untuk premium features'
    },
    rating: 4.2,
    features: ['Document reading', 'Web page reading', 'Speed control', 'Multiple voices', 'Offline reading', 'Highlighting sync'],
    pros: ['Bagus untuk accessibility', 'Multiple platform support', 'Natural sounding voices'],
    cons: ['Subscription untuk fitur terbaik', 'Interface kadang lag', 'Voice selection terbatas di free']
  },
  {
    id: '24',
    name: 'Descript',
    slug: 'descript',
    description: 'All-in-one audio dan video editor dengan AI transcription, voice cloning, dan text-based editing.',
    fullDescription: 'Descript adalah editor audio dan video revolusioner yang memungkinkan editing dengan mengedit teks. Dilengkapi AI transcription, voice cloning, dan fitur editing canggih lainnya.',
    category: 'Audio',
    logo: '/logos/descript.png',
    website: 'https://descript.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '3 jam transcription per bulan',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.5,
    features: ['Text-based editing', 'AI transcription', 'Voice cloning (Overdub)', 'Screen recording', 'Collaboration tools', 'Publishing'],
    pros: ['Revolutionary editing approach', 'Accurate transcription', 'All-in-one solution'],
    cons: ['Learning curve untuk new users', 'Voice cloning memerlukan training', 'Performa butuh hardware kuat']
  },
  {
    id: '25',
    name: 'Adobe Podcast',
    slug: 'adobe-podcast',
    description: 'AI-powered audio recording dan editing tools untuk membuat podcast berkualitas studio.',
    fullDescription: 'Adobe Podcast (sebelumnya Project Shasta) adalah set tools AI untuk recording dan editing audio yang membuat podcast terdengar seperti direkam di studio profesional.',
    category: 'Audio',
    logo: '/logos/adobepodcast.png',
    website: 'https://podcast.adobe.com',
    pricing: 'free',
    pricingDetails: {
      free: 'Semua fitur gratis saat ini'
    },
    rating: 4.0,
    features: ['AI noise removal', 'Voice enhancement', 'Remote recording', 'Transcription', 'Voice isolation', 'Audio restoration'],
    pros: ['Gratis untuk digunakan', 'Kualitas AI processing tinggi', 'Interface simple'],
    cons: ['Masih dalam beta', 'Fitur terbatas', 'Belum ada mobile app']
  },

  // Video Tools (26-40)
  {
    id: '26',
    name: 'Runway',
    slug: 'runway',
    description: 'Platform editing dan generasi video AI untuk creative professionals dan content creators.',
    fullDescription: 'Runway menawarkan tools AI kreatif untuk generasi video, editing, dan enhancement. Menyediakan model AI cutting-edge untuk content creators dan filmmakers.',
    category: 'Video',
    logo: '/logos/runway.png',
    website: 'https://runwayml.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Kredit terbatas',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.3,
    features: ['AI video generation', 'Background removal', 'Motion tracking', 'Style transfer', 'Green screen', 'Object removal'],
    pros: ['Tools AI video cutting-edge', 'Fitur professional', 'Update regular'],
    cons: ['Learning curve curam', 'Sistem berbasis kredit', 'Resource intensive']
  },
  {
    id: '27',
    name: 'Pictory',
    slug: 'pictory',
    description: 'AI video creation platform yang mengubah scripts dan artikel menjadi engaging videos.',
    fullDescription: 'Pictory menggunakan AI untuk membuat video dari scripts, blog posts, atau artikel. Otomatis menambahkan visuals, music, dan voiceover untuk membuat video engaging.',
    category: 'Video',
    logo: '/logos/pictory.png',
    website: 'https://pictory.ai',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $19/bulan'
    },
    rating: 4.1,
    features: ['Script to video', 'Article to video', 'Auto video highlights', 'Text overlay', 'Music library', 'Voice narration'],
    pros: ['Mudah digunakan', 'Template yang banyak', 'Output cepat'],
    cons: ['Tidak ada free tier', 'Customization terbatas', 'Video quality standard']
  },
  {
    id: '28',
    name: 'Synthesia',
    slug: 'synthesia',
    description: 'AI video generation platform dengan virtual presenters untuk training dan marketing videos.',
    fullDescription: 'Synthesia memungkinkan pembuatan video dengan virtual presenters AI. Input teks akan diubah menjadi video dengan avatar yang berbicara dalam berbagai bahasa.',
    category: 'Video',
    logo: '/logos/synthesia.png',
    website: 'https://synthesia.io',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $22.50/bulan'
    },
    rating: 4.2,
    features: ['AI avatars', 'Multi-language support', 'Custom avatars', 'Screen recording', 'Templates', 'Team collaboration'],
    pros: ['Tidak perlu camera atau studio', 'Multi-language natural', 'Professional output'],
    cons: ['Harga cukup mahal', 'Avatar terlihat artificial', 'Customization terbatas']
  },
  {
    id: '29',
    name: 'Loom AI',
    slug: 'loom-ai',
    description: 'Screen recording dengan AI-powered editing, transcription, dan auto-generated summaries.',
    fullDescription: 'Loom AI menambahkan kemampuan AI ke platform screen recording Loom, termasuk automatic transcription, video summaries, dan editing suggestions.',
    category: 'Video',
    logo: '/logos/loom.png',
    website: 'https://loom.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '25 video per person',
      paid: 'Mulai dari $8/bulan'
    },
    rating: 4.4,
    features: ['AI transcription', 'Auto summaries', 'Smart editing', 'Action items', 'Video compression', 'Analytics'],
    pros: ['Mudah digunakan', 'AI features helpful', 'Good free tier'],
    cons: ['AI features masih basic', 'Perlu subscription untuk unlimited', 'Focus pada screen recording']
  },
  {
    id: '30',
    name: 'Kapwing',
    slug: 'kapwing',
    description: 'Online video editor dengan AI features untuk subtitle generation, background removal, dan resize.',
    fullDescription: 'Kapwing adalah online video editor yang dilengkapi berbagai AI features seperti automatic subtitle generation, smart background removal, dan intelligent video resizing.',
    category: 'Video',
    logo: '/logos/kapwing.png',
    website: 'https://kapwing.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Fitur dasar dengan watermark',
      paid: 'Mulai dari $16/bulan'
    },
    rating: 4.0,
    features: ['AI subtitle generation', 'Background removal', 'Auto resize', 'Voice enhancement', 'Text to speech', 'Collaboration'],
    pros: ['Browser-based', 'Mudah digunakan', 'AI features terintegrasi'],
    cons: ['Watermark di free version', 'Processing time lama', 'Perlu internet connection']
  },

  // Business Tools (31-45)
  {
    id: '31',
    name: 'Otter.ai',
    slug: 'otter-ai',
    description: 'AI meeting transcription dan note-taking assistant untuk productivity dan collaboration.',
    fullDescription: 'Otter.ai menggunakan AI untuk transcribe meeting, interview, dan conversation secara real-time. Menyediakan summary, action items, dan searchable notes.',
    category: 'Business',
    logo: '/logos/otter.png',
    website: 'https://otter.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: '600 menit per bulan',
      paid: 'Mulai dari $8.33/bulan'
    },
    rating: 4.5,
    features: ['Real-time transcription', 'Meeting summaries', 'Action items', 'Speaker identification', 'Collaboration tools', 'Integration apps'],
    pros: ['Accurate transcription', 'Real-time processing', 'Good collaboration features'],
    cons: ['Accuracy menurun dengan background noise', 'Limited languages', 'Export options terbatas di free']
  },
  {
    id: '32',
    name: 'Calendly AI',
    slug: 'calendly-ai',
    description: 'AI scheduling assistant yang mengoptimalkan calendar management dan meeting coordination.',
    fullDescription: 'Calendly AI menambahkan kemampuan AI ke platform scheduling Calendly untuk optimasi calendar, smart scheduling suggestions, dan automated meeting coordination.',
    category: 'Business',
    logo: '/logos/calendly.png',
    website: 'https://calendly.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic scheduling',
      paid: 'Mulai dari $8/bulan untuk AI features'
    },
    rating: 4.3,
    features: ['Smart scheduling', 'AI optimization', 'Meeting prep', 'Auto reminders', 'Calendar sync', 'Team coordination'],
    pros: ['Menghemat waktu scheduling', 'Integrasi calendar seamless', 'User-friendly'],
    cons: ['AI features memerlukan paid plan', 'Customization terbatas', 'Tidak semua timezone supported']
  },
  {
    id: '33',
    name: 'Zoom AI',
    slug: 'zoom-ai',
    description: 'AI assistant terintegrasi dalam Zoom untuk meeting summaries, transcription, dan productivity.',
    fullDescription: 'Zoom AI Companion menyediakan intelligent features dalam platform Zoom, termasuk meeting summaries, real-time transcription, dan productivity enhancements.',
    category: 'Business',
    logo: '/logos/zoom.png',
    website: 'https://zoom.us',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features dengan batasan',
      paid: 'Termasuk dalam Zoom Pro ($14.99/bulan)'
    },
    rating: 4.2,
    features: ['Meeting transcription', 'AI summaries', 'Action items', 'Smart recordings', 'Language translation', 'Background noise removal'],
    pros: ['Terintegrasi dengan Zoom', 'Accurate transcription', 'Professional features'],
    cons: ['Memerlukan Zoom subscription', 'Features masih developing', 'Bahasa support terbatas']
  },
  {
    id: '34',
    name: 'Notion AI',
    slug: 'notion-ai-business',
    description: 'AI workspace assistant untuk project management, documentation, dan team collaboration.',
    fullDescription: 'Notion AI membantu teams dalam project management, documentation, dan collaboration dengan AI-powered writing, summarization, dan organization tools.',
    category: 'Business',
    logo: '/logos/notion.png',
    website: 'https://notion.so',
    pricing: 'paid',
    pricingDetails: {
      paid: '$10/bulan per member sebagai add-on'
    },
    rating: 4.4,
    features: ['AI writing assistant', 'Document generation', 'Meeting notes', 'Project summaries', 'Data analysis', 'Workflow automation'],
    pros: ['All-in-one workspace', 'Powerful AI integration', 'Team collaboration'],
    cons: ['Add-on cost', 'Learning curve', 'Performance kadang lambat']
  },
  {
    id: '35',
    name: 'Krisp',
    slug: 'krisp',
    description: 'AI noise cancellation untuk call yang jernih dan professional dalam meeting dan recording.',
    fullDescription: 'Krisp menggunakan AI untuk menghilangkan background noise dari audio calls dan recordings, memastikan komunikasi yang jernih dan professional.',
    category: 'Business',
    logo: '/logos/krisp.png',
    website: 'https://krisp.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: '120 menit per minggu',
      paid: 'Mulai dari $8/bulan'
    },
    rating: 4.6,
    features: ['Noise cancellation', 'Echo removal', 'Voice clarity', 'Meeting transcription', 'Analytics', 'Cross-platform'],
    pros: ['Sangat effective noise removal', 'Works dengan semua apps', 'Real-time processing'],
    cons: ['Subscription untuk unlimited', 'CPU intensive', 'Voice kadang terdengar artificial']
  },

  // Data & Analytics Tools (36-50)
  {
    id: '36',
    name: 'Tableau AI',
    slug: 'tableau-ai',
    description: 'Business intelligence platform dengan AI untuk data visualization dan automated insights.',
    fullDescription: 'Tableau AI menambahkan kemampuan artificial intelligence ke platform Tableau untuk automated insights, natural language queries, dan intelligent data visualization.',
    category: 'Data & Analytics',
    logo: '/logos/tableau.png',
    website: 'https://tableau.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $70/bulan per user'
    },
    rating: 4.5,
    features: ['Natural language queries', 'Automated insights', 'Smart recommendations', 'Predictive analytics', 'Data preparation', 'Collaboration tools'],
    pros: ['Powerful data visualization', 'AI insights accurate', 'Enterprise-grade'],
    cons: ['Harga sangat mahal', 'Learning curve steep', 'Memerlukan data skills']
  },
  {
    id: '37',
    name: 'Power BI AI',
    slug: 'power-bi-ai',
    description: 'Microsoft business analytics dengan AI capabilities untuk intelligent data analysis.',
    fullDescription: 'Power BI AI mengintegrasikan artificial intelligence dalam Microsoft Power BI untuk automated insights, natural language Q&A, dan smart data analysis.',
    category: 'Data & Analytics',
    logo: '/logos/powerbi.png',
    website: 'https://powerbi.microsoft.com',
    pricing: 'paid',
    pricingDetails: {
      paid: '$10/bulan per user untuk Power BI Pro'
    },
    rating: 4.3,
    features: ['AI visuals', 'Natural language Q&A', 'Automated insights', 'Anomaly detection', 'Forecasting', 'Key influencers'],
    pros: ['Integrasi Microsoft ecosystem', 'Harga competitive', 'AI features built-in'],
    cons: ['Terbatas pada Microsoft stack', 'Customization terbatas', 'Perlu Office 365 optimal']
  },
  {
    id: '38',
    name: 'DataRobot',
    slug: 'datarobot',
    description: 'Automated machine learning platform untuk building dan deploying predictive models.',
    fullDescription: 'DataRobot adalah enterprise AI platform yang mengotomatisasi proses machine learning dari data preparation hingga model deployment.',
    category: 'Data & Analytics',
    logo: '/logos/datarobot.png',
    website: 'https://datarobot.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Enterprise pricing, hubungi sales'
    },
    rating: 4.4,
    features: ['AutoML', 'Model deployment', 'MLOps', 'Time series forecasting', 'Model monitoring', 'Feature engineering'],
    pros: ['Automated ML pipeline', 'Enterprise-grade', 'Comprehensive platform'],
    cons: ['Sangat mahal', 'Enterprise focus only', 'Kompleks untuk small teams']
  },
  {
    id: '39',
    name: 'H2O.ai',
    slug: 'h2o-ai',
    description: 'Open-source machine learning platform dengan AutoML capabilities untuk data scientists.',
    fullDescription: 'H2O.ai menyediakan platform machine learning open-source dengan automated machine learning capabilities untuk democratize AI.',
    category: 'Data & Analytics',
    logo: '/logos/h2o.png',
    website: 'https://h2o.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Open source version',
      paid: 'Enterprise support dan features'
    },
    rating: 4.2,
    features: ['AutoML', 'MLOps', 'Model interpretability', 'Distributed computing', 'Multiple algorithms', 'API access'],
    pros: ['Open source available', 'Powerful AutoML', 'Good documentation'],
    cons: ['Technical expertise required', 'Limited GUI', 'Enterprise features expensive']
  },
  {
    id: '40',
    name: 'MonkeyLearn',
    slug: 'monkeylearn',
    description: 'Text analysis AI platform untuk sentiment analysis, keyword extraction, dan data classification.',
    fullDescription: 'MonkeyLearn adalah platform yang memungkinkan bisnis menganalisis text data menggunakan machine learning untuk sentiment analysis, classification, dan extraction.',
    category: 'Data & Analytics',
    logo: '/logos/monkeylearn.png',
    website: 'https://monkeylearn.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '300 queries per bulan',
      paid: 'Mulai dari $299/bulan'
    },
    rating: 4.0,
    features: ['Sentiment analysis', 'Text classification', 'Keyword extraction', 'Custom models', 'API integration', 'Data visualization'],
    pros: ['Easy to use', 'Pre-trained models', 'Good API'],
    cons: ['Expensive untuk scale', 'Limited free tier', 'English-focused']
  },

  // Design Tools (41-60)
  {
    id: '41',
    name: 'Canva AI',
    slug: 'canva-ai',
    description: 'Design platform dengan AI features untuk template suggestions, background removal, dan text generation.',
    fullDescription: 'Canva AI menambahkan kemampuan artificial intelligence ke platform design Canva, termasuk smart template recommendations, AI text generation, dan automated design suggestions.',
    category: 'Design',
    logo: '/logos/canva.png',
    website: 'https://canva.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features',
      paid: 'Canva Pro $12.99/bulan untuk AI features'
    },
    rating: 4.6,
    features: ['AI template suggestions', 'Background removal', 'Text generation', 'Magic resize', 'Brand kit', 'Animation'],
    pros: ['User-friendly', 'AI features helpful', 'Large template library'],
    cons: ['Pro subscription untuk best AI features', 'Customization terbatas', 'Template kadang generic']
  },
  {
    id: '42',
    name: 'Figma AI',
    slug: 'figma-ai',
    description: 'Design collaboration platform dengan AI plugins untuk automated design tasks dan assistance.',
    fullDescription: 'Figma AI mengintegrasikan AI capabilities dalam platform design collaboration Figma melalui plugins dan native features untuk automated design tasks.',
    category: 'Design',
    logo: '/logos/figma.png',
    website: 'https://figma.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic Figma free',
      paid: 'AI plugins vary in pricing'
    },
    rating: 4.4,
    features: ['AI design suggestions', 'Auto-layout optimization', 'Color palette generation', 'Content generation', 'Design system automation', 'Accessibility checks'],
    pros: ['Professional design tool', 'Rich plugin ecosystem', 'Collaboration features'],
    cons: ['AI features mostly plugins', 'Learning curve', 'Perlu internet connection']
  },
  {
    id: '43',
    name: 'Uizard',
    slug: 'uizard',
    description: 'AI design tool yang mengubah sketches dan wireframes menjadi digital designs dan prototypes.',
    fullDescription: 'Uizard menggunakan AI untuk mengubah hand-drawn sketches, screenshots, atau wireframes menjadi digital designs dan interactive prototypes.',
    category: 'Design',
    logo: '/logos/uizard.png',
    website: 'https://uizard.io',
    pricing: 'freemium',
    pricingDetails: {
      free: '2 projects',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.1,
    features: ['Sketch to design', 'Screenshot to mockup', 'AI design generation', 'Prototyping', 'Collaboration', 'Template library'],
    pros: ['Revolutionary sketch recognition', 'Fast prototyping', 'No design skills required'],
    cons: ['Output quality varies', 'Limited customization', 'Masih developing']
  },
  {
    id: '44',
    name: 'Khroma',
    slug: 'khroma',
    description: 'AI color palette generator yang belajar dari preferensi untuk menciptakan unlimited color schemes.',
    fullDescription: 'Khroma menggunakan AI untuk generate color palettes berdasarkan preferensi user. AI belajar dari pilihan user untuk menciptakan combinations yang personal.',
    category: 'Design',
    logo: '/logos/khroma.png',
    website: 'https://khroma.co',
    pricing: 'free',
    pricingDetails: {
      free: 'Semua fitur gratis'
    },
    rating: 4.3,
    features: ['AI color generation', 'Personal preferences learning', 'Color search', 'Palette collections', 'Accessibility info', 'Export options'],
    pros: ['Completely free', 'Learns preferences', 'Unlimited generations'],
    cons: ['Limited to color palettes', 'Simple interface', 'No advanced features']
  },
  {
    id: '45',
    name: 'Runway ML',
    slug: 'runway-ml-design',
    description: 'Creative AI tools untuk designers termasuk background removal, style transfer, dan image generation.',
    fullDescription: 'Runway ML menyediakan suite AI tools untuk creative professionals, termasuk background removal, style transfer, image generation, dan video editing.',
    category: 'Design',
    logo: '/logos/runway.png',
    website: 'https://runwayml.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited credits',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.5,
    features: ['Background removal', 'Style transfer', 'Image generation', 'Object removal', 'Super resolution', 'Color matching'],
    pros: ['Cutting-edge AI tools', 'Professional quality', 'Regular updates'],
    cons: ['Credit-based system', 'Learning curve', 'Can be expensive']
  },

  // Marketing Tools (46-60)
  {
    id: '46',
    name: 'HubSpot AI',
    slug: 'hubspot-ai',
    description: 'CRM dan marketing platform dengan AI untuk lead scoring, content optimization, dan sales predictions.',
    fullDescription: 'HubSpot AI mengintegrasikan artificial intelligence dalam CRM dan marketing platform untuk automated lead scoring, content optimization, dan predictive analytics.',
    category: 'Marketing',
    logo: '/logos/hubspot.png',
    website: 'https://hubspot.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'HubSpot CRM gratis dengan AI terbatas',
      paid: 'Mulai dari $45/bulan untuk advanced AI'
    },
    rating: 4.4,
    features: ['Lead scoring', 'Content optimization', 'Email personalization', 'Sales predictions', 'Chatbot builder', 'Analytics insights'],
    pros: ['All-in-one platform', 'AI well-integrated', 'Good free tier'],
    cons: ['Expensive untuk advanced features', 'Learning curve', 'Lock-in ecosystem']
  },
  {
    id: '47',
    name: 'Mailchimp AI',
    slug: 'mailchimp-ai',
    description: 'Email marketing platform dengan AI untuk subject line optimization, send time, dan content suggestions.',
    fullDescription: 'Mailchimp AI menggunakan machine learning untuk mengoptimalkan email campaigns dengan subject line suggestions, optimal send times, dan content recommendations.',
    category: 'Marketing',
    logo: '/logos/mailchimp.png',
    website: 'https://mailchimp.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '2,000 contacts',
      paid: 'Mulai dari $10/bulan untuk AI features'
    },
    rating: 4.2,
    features: ['Subject line optimizer', 'Send time optimization', 'Content suggestions', 'Audience insights', 'A/B testing', 'Predictive analytics'],
    pros: ['Easy to use', 'Good AI recommendations', 'Comprehensive platform'],
    cons: ['AI features dalam paid plans', 'Limited automation di free', 'Pricing naik dengan contacts']
  },
  {
    id: '48',
    name: 'AdCreative.ai',
    slug: 'adcreative-ai',
    description: 'AI platform untuk generating ad creatives, banners, dan marketing materials yang high-converting.',
    fullDescription: 'AdCreative.ai menggunakan AI untuk generate ad creatives yang conversion-focused berdasarkan data dari millions of high-performing ads.',
    category: 'Marketing',
    logo: '/logos/adcreative.png',
    website: 'https://adcreative.ai',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $21/bulan'
    },
    rating: 4.1,
    features: ['Ad creative generation', 'Text generation', 'Creative insights', 'Brand customization', 'A/B testing', 'Integration platforms'],
    pros: ['Data-driven creatives', 'High conversion focus', 'Multiple formats'],
    cons: ['No free tier', 'Output kadang generic', 'Limited customization']
  },
  {
    id: '49',
    name: 'Persado',
    slug: 'persado',
    description: 'AI copywriting platform untuk enterprise yang mengoptimalkan marketing language dan messaging.',
    fullDescription: 'Persado adalah enterprise AI platform yang menggunakan machine learning untuk mengoptimalkan marketing copy dan messaging berdasarkan emotional impact dan conversion data.',
    category: 'Marketing',
    logo: '/logos/persado.png',
    website: 'https://persado.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Enterprise pricing, hubungi sales'
    },
    rating: 4.3,
    features: ['AI copywriting', 'Emotional analysis', 'A/B testing', 'Performance optimization', 'Brand voice', 'Multi-channel'],
    pros: ['Enterprise-grade', 'Data-driven copy', 'Proven ROI'],
    cons: ['Very expensive', 'Enterprise only', 'Long implementation']
  },
  {
    id: '50',
    name: 'Smartly.io',
    slug: 'smartly-io',
    description: 'Social media advertising platform dengan AI untuk campaign optimization dan creative automation.',
    fullDescription: 'Smartly.io menggunakan AI untuk mengotomatisasi dan mengoptimalkan social media advertising campaigns di Facebook, Instagram, dan platform lainnya.',
    category: 'Marketing',
    logo: '/logos/smartly.png',
    website: 'https://smartly.io',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Pricing based on ad spend, hubungi sales'
    },
    rating: 4.0,
    features: ['Campaign automation', 'Creative optimization', 'Audience targeting', 'Budget optimization', 'Performance analytics', 'Multi-platform'],
    pros: ['Advanced automation', 'Cross-platform', 'Enterprise features'],
    cons: ['Very expensive', 'Kompleks setup', 'Requires ad spend minimum']
  },

  // Additional Tools (51-100) - Continuing with more categories
  {
    id: '51',
    name: 'Luma AI',
    slug: 'luma-ai',
    description: '3D capture dan Neural Radiance Fields untuk membuat 3D scenes dari photos.',
    fullDescription: 'Luma AI menggunakan Neural Radiance Fields (NeRF) untuk membuat 3D scenes photorealistic dari regular photos, memungkinkan virtual exploration dan content creation.',
    category: 'Design',
    logo: '/logos/luma.png',
    website: 'https://lumalabs.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited captures per bulan',
      paid: 'Mulai dari $9.99/bulan'
    },
    rating: 4.2,
    features: ['3D scene capture', 'NeRF technology', 'Mobile app', 'Web viewer', 'Export options', 'Collaborative sharing'],
    pros: ['Cutting-edge 3D technology', 'Mobile-friendly', 'High quality output'],
    cons: ['Processing time lama', 'Limited free usage', 'Requires good photos']
  },
  {
    id: '52',
    name: 'Tome',
    slug: 'tome',
    description: 'AI-powered storytelling platform untuk membuat presentations dan documents yang engaging.',
    fullDescription: 'Tome menggunakan AI untuk membantu membuat presentations, documents, dan stories yang engaging dengan auto-generated content dan layouts.',
    category: 'Writing',
    logo: '/logos/tome.png',
    website: 'https://tome.app',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features',
      paid: 'Mulai dari $8/bulan'
    },
    rating: 4.0,
    features: ['AI content generation', 'Auto layouts', 'Interactive elements', 'Collaboration', 'Templates', 'Export options'],
    pros: ['AI-generated content', 'Beautiful layouts', 'Easy collaboration'],
    cons: ['Limited customization', 'Output quality varies', 'Relatively new']
  },
  {
    id: '53',
    name: 'Fliki',
    slug: 'fliki',
    description: 'Text-to-video AI platform dengan realistic voices untuk content creation dan marketing.',
    fullDescription: 'Fliki mengubah text menjadi video dengan AI voices yang realistic, dilengkapi stock media library untuk membuat content marketing dan educational videos.',
    category: 'Video',
    logo: '/logos/fliki.png',
    website: 'https://fliki.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: '5 menit video per bulan',
      paid: 'Mulai dari $21/bulan'
    },
    rating: 4.1,
    features: ['Text-to-video', 'AI voices', 'Stock media library', 'Multiple languages', 'Brand customization', 'Social media formats'],
    pros: ['Easy video creation', 'Realistic voices', 'Good stock library'],
    cons: ['Limited free tier', 'Output quality standard', 'Voice selection terbatas']
  },
  {
    id: '54',
    name: 'Beautiful.AI',
    slug: 'beautiful-ai',
    description: 'AI presentation maker yang otomatis mengoptimalkan design dan layout slides.',
    fullDescription: 'Beautiful.AI menggunakan design AI untuk otomatis mengoptimalkan layout, spacing, dan visual hierarchy presentations saat user menambahkan content.',
    category: 'Design',
    logo: '/logos/beautiful.png',
    website: 'https://beautiful.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited templates',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 3.9,
    features: ['Auto design optimization', 'Smart templates', 'Team collaboration', 'Brand customization', 'Analytics', 'Export options'],
    pros: ['Auto design adjustment', 'Professional templates', 'Easy to use'],
    cons: ['Customization terbatas', 'Template selection limited di free', 'Price cukup mahal']
  },
  {
    id: '55',
    name: 'Cleanup.pictures',
    slug: 'cleanup-pictures',
    description: 'AI image editor untuk menghapus objects, people, text dari photos secara otomatis.',
    fullDescription: 'Cleanup.pictures menggunakan AI untuk menghapus unwanted objects, people, atau text dari photos dengan results yang natural dan seamless.',
    category: 'Image Generation',
    logo: '/logos/cleanup.png',
    website: 'https://cleanup.pictures',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Low resolution downloads',
      paid: 'Mulai dari $5/bulan untuk HD'
    },
    rating: 4.3,
    features: ['Object removal', 'People removal', 'Text removal', 'Batch processing', 'API access', 'High resolution output'],
    pros: ['Sangat accurate', 'Easy to use', 'Fast processing'],
    cons: ['HD requires subscription', 'Limited free usage', 'Simple feature set']
  },
  {
    id: '56',
    name: 'Soundraw',
    slug: 'soundraw',
    description: 'AI music generator untuk membuat original background music dan soundtracks.',
    fullDescription: 'Soundraw menggunakan AI untuk generate original music tracks berdasarkan mood, genre, dan length requirements, perfect untuk video backgrounds dan content creation.',
    category: 'Audio',
    logo: '/logos/soundraw.png',
    website: 'https://soundraw.io',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited downloads',
      paid: 'Mulai dari $16.99/bulan'
    },
    rating: 4.2,
    features: ['AI music generation', 'Mood customization', 'Genre selection', 'Length control', 'Commercial license', 'Stem downloads'],
    pros: ['Original music creation', 'Commercial use allowed', 'Good variety'],
    cons: ['Subscription untuk unlimited', 'Music quality varies', 'Limited free downloads']
  },
  {
    id: '57',
    name: 'Brandwatch',
    slug: 'brandwatch',
    description: 'Social media monitoring dengan AI untuk sentiment analysis dan brand intelligence.',
    fullDescription: 'Brandwatch menggunakan AI untuk monitor social media mentions, analyze sentiment, dan provide brand intelligence insights dari online conversations.',
    category: 'Marketing',
    logo: '/logos/brandwatch.png',
    website: 'https://brandwatch.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Enterprise pricing, hubungi sales'
    },
    rating: 4.1,
    features: ['Social media monitoring', 'Sentiment analysis', 'Trend detection', 'Competitive intelligence', 'Influencer identification', 'Crisis management'],
    pros: ['Comprehensive monitoring', 'Accurate sentiment analysis', 'Enterprise features'],
    cons: ['Very expensive', 'Complex interface', 'Overkill untuk small business']
  },
  {
    id: '58',
    name: 'Codeium',
    slug: 'codeium',
    description: 'Free AI coding assistant dengan autocomplete, chat, dan search capabilities.',
    fullDescription: 'Codeium adalah AI coding assistant gratis yang menawarkan intelligent autocomplete, AI chat untuk coding questions, dan semantic code search.',
    category: 'Code',
    logo: '/logos/codeium.png',
    website: 'https://codeium.com',
    pricing: 'free',
    pricingDetails: {
      free: 'Semua fitur individual gratis',
      paid: 'Team plans untuk enterprise features'
    },
    rating: 4.4,
    features: ['AI autocomplete', 'Chat assistance', 'Code search', 'Multiple languages', 'IDE integrations', 'Context awareness'],
    pros: ['Completely free untuk individual', 'Good IDE support', 'Fast suggestions'],
    cons: ['Relatively new', 'Team features limited', 'Smaller community']
  },
  {
    id: '59',
    name: 'Whisper',
    slug: 'whisper',
    description: 'Speech recognition AI dari OpenAI untuk transcription akurat dalam multiple languages.',
    fullDescription: 'Whisper adalah speech recognition system dari OpenAI yang sangat akurat untuk transcription dan translation dalam berbagai bahasa dan conditions.',
    category: 'Audio',
    logo: '/logos/whisper.png',
    website: 'https://openai.com/whisper',
    pricing: 'free',
    pricingDetails: {
      free: 'Open source model gratis',
      paid: 'API usage pricing'
    },
    rating: 4.7,
    features: ['Speech recognition', 'Multi-language support', 'Translation capabilities', 'Robust to noise', 'Open source', 'API access'],
    pros: ['Very accurate', 'Many languages supported', 'Open source'],
    cons: ['Requires technical setup', 'Processing power intensive', 'No GUI interface']
  },
  {
    id: '60',
    name: 'Gamma',
    slug: 'gamma',
    description: 'AI presentation maker yang membuat slides, documents, dan webpages dari simple prompts.',
    fullDescription: 'Gamma menggunakan AI untuk membuat presentations, documents, dan webpages yang beautiful dari simple text prompts, dengan design yang professional dan content yang engaging.',
    category: 'Design',
    logo: '/logos/gamma.png',
    website: 'https://gamma.app',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited credits',
      paid: 'Mulai dari $8/bulan'
    },
    rating: 4.3,
    features: ['AI content generation', 'Auto design', 'Templates', 'Collaboration', 'Analytics', 'Export options'],
    pros: ['Very easy to use', 'Great design output', 'Multi-format support'],
    cons: ['Credit-based system', 'Customization limited', 'Internet dependent']
  },

  // Continue with more diverse tools (61-100)
  {
    id: '61',
    name: 'AssemblyAI',
    slug: 'assemblyai',
    description: 'Speech-to-text API dengan AI models untuk transcription, summarization, dan content moderation.',
    fullDescription: 'AssemblyAI menyediakan speech-to-text API dengan model AI untuk accurate transcription, automatic summarization, dan real-time content moderation.',
    category: 'Audio',
    logo: '/logos/assemblyai.png',
    website: 'https://assemblyai.com',
    pricing: 'paid',
    pricingDetails: {
      paid: '$0.37 per hour audio transcribed'
    },
    rating: 4.5,
    features: ['Speech-to-text API', 'Speaker diarization', 'Sentiment analysis', 'Content moderation', 'Real-time transcription', 'Multiple languages'],
    pros: ['Very accurate transcription', 'Developer-friendly API', 'Advanced features'],
    cons: ['Paid service only', 'Requires technical integration', 'Per-hour pricing']
  },
  {
    id: '62',
    name: 'Rewind',
    slug: 'rewind',
    description: 'Personal AI assistant yang merekam dan mengindex semua yang Anda lakukan di komputer.',
    fullDescription: 'Rewind adalah personal AI yang merekam dan mengindex semua aktivitas komputer Anda, memungkinkan search dan recall informasi apa pun yang pernah Anda lihat atau lakukan.',
    category: 'Business',
    logo: '/logos/rewind.png',
    website: 'https://rewind.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic recording',
      paid: '$10/bulan untuk unlimited'
    },
    rating: 4.0,
    features: ['Screen recording', 'AI search', 'Meeting summaries', 'Privacy-first', 'Local storage', 'Cross-app search'],
    pros: ['Revolutionary concept', 'Privacy-focused', 'Powerful search'],
    cons: ['Privacy concerns untuk beberapa user', 'Storage requirements besar', 'masOS only currently']
  },
  {
    id: '63',
    name: 'Riffusion',
    slug: 'riffusion',
    description: 'AI music generation yang membuat music dari text prompts menggunakan stable diffusion.',
    fullDescription: 'Riffusion menggunakan stable diffusion untuk generate music dari text descriptions, creating spectrograms yang kemudian dikonversi menjadi audio.',
    category: 'Audio',
    logo: '/logos/riffusion.png',
    website: 'https://riffusion.com',
    pricing: 'free',
    pricingDetails: {
      free: 'Open source, gratis untuk digunakan'
    },
    rating: 3.8,
    features: ['Text-to-music generation', 'Stable diffusion based', 'Open source', 'Web interface', 'Customizable prompts', 'Audio export'],
    pros: ['Free dan open source', 'Unique approach', 'Creative possibilities'],
    cons: ['Audio quality limited', 'Short clips only', 'Experimental technology']
  },
  {
    id: '64',
    name: 'Playground AI',
    slug: 'playground-ai',
    description: 'Browser-based AI image generator dengan multiple models dan easy-to-use interface.',
    fullDescription: 'Playground AI adalah platform browser-based untuk generate images menggunakan berbagai AI models dengan interface yang user-friendly dan community features.',
    category: 'Image Generation',
    logo: '/logos/playground.png',
    website: 'https://playgroundai.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '1000 images per hari',
      paid: 'Mulai dari $15/bulan'
    },
    rating: 4.1,
    features: ['Multiple AI models', 'Browser-based', 'Community gallery', 'Batch generation', 'Image editing', 'Commercial license'],
    pros: ['Generous free tier', 'Multiple models', 'User-friendly interface'],
    cons: ['Queue times pada peak hours', 'Limited advanced controls', 'Community content moderation']
  },
  {
    id: '65',
    name: 'Botsonic',
    slug: 'botsonic',
    description: 'No-code chatbot builder dengan AI untuk customer service dan website automation.',
    fullDescription: 'Botsonic memungkinkan pembuatan AI chatbots tanpa coding untuk customer service, lead generation, dan website automation dengan natural language processing.',
    category: 'AI Assistant',
    logo: '/logos/botsonic.png',
    website: 'https://botsonic.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited messages',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.0,
    features: ['No-code chatbot builder', 'AI conversations', 'Website integration', 'Lead generation', 'Analytics', 'Multi-platform deployment'],
    pros: ['Easy to setup', 'No coding required', 'Good integrations'],
    cons: ['Limited customization', 'Message limits', 'Basic AI capabilities']
  },
  {
    id: '66',
    name: 'Lex',
    slug: 'lex',
    description: 'AI writing assistant yang dirancang khusus untuk authors dan long-form content creation.',
    fullDescription: 'Lex adalah word processor dengan AI assistant yang dirancang untuk authors, membantu dengan writing, editing, dan organizing long-form content seperti books dan articles.',
    category: 'Writing',
    logo: '/logos/lex.png',
    website: 'https://lex.page',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features',
      paid: '$20/bulan untuk advanced AI'
    },
    rating: 4.2,
    features: ['AI writing assistance', 'Long-form optimization', 'Research integration', 'Version control', 'Collaboration', 'Publishing tools'],
    pros: ['Designed untuk authors', 'Long-form focus', 'Clean interface'],
    cons: ['Niche market focus', 'Limited templates', 'Still developing']
  },
  {
    id: '67',
    name: 'Suno',
    slug: 'suno',
    description: 'AI music creation platform yang generate complete songs dengan lyrics dari text prompts.',
    fullDescription: 'Suno AI dapat generate complete songs termasuk vocals dan lyrics dari simple text prompts, memungkinkan anyone untuk create original music.',
    category: 'Audio',
    logo: '/logos/suno.png',
    website: 'https://suno.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited generations per hari',
      paid: 'Mulai dari $8/bulan'
    },
    rating: 4.6,
    features: ['Complete song generation', 'Lyrics generation', 'Multiple genres', 'Vocal synthesis', 'Commercial licensing', 'Style control'],
    pros: ['Generates complete songs', 'High quality output', 'Easy to use'],
    cons: ['Limited free usage', 'Copyright considerations', 'Genre limitations']
  },
  {
    id: '68',
    name: 'Typeface',
    slug: 'typeface',
    description: 'Enterprise AI content platform untuk brand-consistent content creation at scale.',
    fullDescription: 'Typeface adalah enterprise AI platform yang memungkinkan teams untuk create brand-consistent content at scale dengan AI yang trained pada brand voice dan guidelines.',
    category: 'Writing',
    logo: '/logos/typeface.png',
    website: 'https://typeface.ai',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Enterprise pricing, hubungi sales'
    },
    rating: 4.3,
    features: ['Brand-trained AI', 'Content templates', 'Workflow integration', 'Brand consistency', 'Team collaboration', 'Performance analytics'],
    pros: ['Enterprise-grade', 'Brand consistency', 'Workflow integration'],
    cons: ['Very expensive', 'Enterprise only', 'Complex implementation']
  },
  {
    id: '69',
    name: 'Mixo',
    slug: 'mixo',
    description: 'AI website builder yang membuat landing pages dari business idea description.',
    fullDescription: 'Mixo menggunakan AI untuk generate complete landing pages dan websites dari simple business idea descriptions, termasuk content, design, dan functionality.',
    category: 'Design',
    logo: '/logos/mixo.png',
    website: 'https://mixo.io',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic website',
      paid: 'Mulai dari $9/bulan'
    },
    rating: 3.9,
    features: ['AI website generation', 'Landing page builder', 'Content generation', 'Email collection', 'Analytics', 'Custom domains'],
    pros: ['Very fast website creation', 'No design skills needed', 'All-in-one solution'],
    cons: ['Limited customization', 'Template-based output', 'Basic functionality']
  },
  {
    id: '70',
    name: 'Outplay',
    slug: 'outplay',
    description: 'Sales engagement platform dengan AI untuk personalized outreach dan lead nurturing.',
    fullDescription: 'Outplay menggunakan AI untuk optimize sales outreach campaigns dengan personalized messaging, optimal timing, dan automated follow-ups.',
    category: 'Business',
    logo: '/logos/outplay.png',
    website: 'https://outplayhq.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $79/bulan per user'
    },
    rating: 4.1,
    features: ['AI personalization', 'Multi-channel outreach', 'Sales sequences', 'CRM integration', 'Analytics', 'Team collaboration'],
    pros: ['Comprehensive sales platform', 'AI personalization', 'Multi-channel support'],
    cons: ['Expensive untuk small teams', 'Learning curve', 'Requires CRM integration']
  },

  // Continue with remaining tools (71-100)
  {
    id: '71',
    name: 'Lumen5',
    slug: 'lumen5',
    description: 'AI video creation platform yang mengubah blog posts dan articles menjadi engaging videos.',
    fullDescription: 'Lumen5 menggunakan AI untuk transform text content seperti blog posts dan articles menjadi engaging social media videos dengan automated scene creation dan media suggestions.',
    category: 'Video',
    logo: '/logos/lumen5.png',
    website: 'https://lumen5.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Watermarked videos',
      paid: 'Mulai dari $19/bulan'
    },
    rating: 4.2,
    features: ['Text-to-video conversion', 'AI scene creation', 'Media library', 'Brand customization', 'Social media optimization', 'Templates'],
    pros: ['Easy content repurposing', 'Good media library', 'Social media focused'],
    cons: ['Watermark di free version', 'Limited customization', 'Template-based output']
  },
  {
    id: '72',
    name: 'Eightify',
    slug: 'eightify',
    description: 'AI summary tool untuk YouTube videos yang extract key insights dalam seconds.',
    fullDescription: 'Eightify menggunakan AI untuk generate summaries dari YouTube videos, extract key points dan insights untuk membantu users consume content lebih efficiently.',
    category: 'Business',
    logo: '/logos/eightify.png',
    website: 'https://eightify.app',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited summaries',
      paid: 'Mulai dari $4.99/bulan'
    },
    rating: 4.3,
    features: ['YouTube video summaries', 'Key insights extraction', 'Timestamped highlights', 'Multiple languages', 'Browser extension', 'Export options'],
    pros: ['Time-saving', 'Accurate summaries', 'Easy to use'],
    cons: ['Limited free usage', 'YouTube only', 'Summary quality varies']
  },
  {
    id: '73',
    name: 'Looka',
    slug: 'looka',
    description: 'AI logo maker dan brand identity platform untuk small businesses dan startups.',
    fullDescription: 'Looka menggunakan AI untuk generate logos dan brand identity materials, membantu small businesses dan startups create professional branding tanpa design skills.',
    category: 'Design',
    logo: '/logos/looka.png',
    website: 'https://looka.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Logo package mulai dari $20'
    },
    rating: 4.0,
    features: ['AI logo generation', 'Brand kit creation', 'Business card design', 'Website mockups', 'Social media assets', 'Vector files'],
    pros: ['Affordable logo creation', 'Complete brand package', 'Professional results'],
    cons: ['No free tier', 'Limited revisions', 'Template-based approach']
  },
  {
    id: '74',
    name: 'Timely',
    slug: 'timely',
    description: 'AI time tracking app yang otomatis track dan categorize work activities.',
    fullDescription: 'Timely menggunakan AI untuk automatically track dan categorize work activities, providing accurate time insights tanpa manual input dari users.',
    category: 'Business',
    logo: '/logos/timely.png',
    website: 'https://timelyapp.com',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Mulai dari $8/bulan per user'
    },
    rating: 4.4,
    features: ['Automatic time tracking', 'AI categorization', 'Project insights', 'Team productivity', 'Billing integration', 'Privacy controls'],
    pros: ['Truly automatic tracking', 'Good privacy controls', 'Detailed insights'],
    cons: ['No free tier', 'Subscription required', 'Learning period needed']
  },
  {
    id: '75',
    name: 'Simplified',
    slug: 'simplified',
    description: 'All-in-one design dan marketing platform dengan AI untuk content creation dan social media.',
    fullDescription: 'Simplified adalah all-in-one platform yang menggabungkan design tools, content creation, dan social media management dengan AI assistance.',
    category: 'Marketing',
    logo: '/logos/simplified.png',
    website: 'https://simplified.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.1,
    features: ['AI design tools', 'Content generation', 'Social media management', 'Video creation', 'Collaboration', 'Brand kit'],
    pros: ['All-in-one platform', 'AI-powered features', 'Good value'],
    cons: ['Interface dapat overwhelming', 'Feature quality varies', 'Learning curve']
  },

  // Final batch of tools (76-100)
  {
    id: '76',
    name: 'DeepL',
    slug: 'deepl',
    description: 'AI translator yang memberikan terjemahan natural dan akurat untuk multiple languages.',
    fullDescription: 'DeepL menggunakan neural networks untuk provide translations yang lebih natural dan contextually accurate dibandingkan traditional machine translation services.',
    category: 'Writing',
    logo: '/logos/deepl.png',
    website: 'https://deepl.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited characters per bulan',
      paid: 'Mulai dari $5.99/bulan'
    },
    rating: 4.7,
    features: ['Neural machine translation', 'Document translation', 'API access', 'Multiple languages', 'Context awareness', 'Formal/informal options'],
    pros: ['Very accurate translations', 'Natural language output', 'Good language support'],
    cons: ['Character limits di free', 'Language selection terbatas vs Google', 'Europe-focused']
  },
  {
    id: '77',
    name: 'Zapier AI',
    slug: 'zapier-ai',
    description: 'Automation platform dengan AI untuk creating workflows dan connecting apps tanpa coding.',
    fullDescription: 'Zapier AI membantu users create automation workflows dengan natural language, connecting different apps dan services tanpa memerlukan technical skills.',
    category: 'Business',
    logo: '/logos/zapier.png',
    website: 'https://zapier.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '100 tasks per bulan',
      paid: 'Mulai dari $19.99/bulan'
    },
    rating: 4.5,
    features: ['Workflow automation', 'App integrations', 'AI zap creation', 'Natural language setup', 'Conditional logic', 'Error handling'],
    pros: ['Huge app ecosystem', 'No coding required', 'AI makes setup easier'],
    cons: ['Can be expensive untuk high usage', 'Complex workflows challenging', 'Debugging difficult']
  },
  {
    id: '78',
    name: 'Bing Image Creator',
    slug: 'bing-image-creator',
    description: 'AI image generator dari Microsoft powered by DALL-E, terintegrasi dengan Bing Chat.',
    fullDescription: 'Bing Image Creator menggunakan DALL-E technology untuk generate images dari text prompts, terintegrasi dengan Microsoft Bing dan Edge browser.',
    category: 'Image Generation',
    logo: '/logos/bing.png',
    website: 'https://bing.com/create',
    pricing: 'free',
    pricingDetails: {
      free: 'Gratis dengan Microsoft account'
    },
    rating: 4.2,
    features: ['DALL-E powered', 'Bing integration', 'Multiple styles', 'Safe content filters', 'Download options', 'Sharing features'],
    pros: ['Completely free', 'Good quality output', 'Easy access'],
    cons: ['Content filters strict', 'Limited customization', 'Microsoft ecosystem focused']
  },
  {
    id: '79',
    name: 'Character.AI',
    slug: 'character-ai',
    description: 'Platform untuk create dan chat dengan AI characters yang memiliki personality unik.',
    fullDescription: 'Character.AI memungkinkan users untuk create dan interact dengan AI characters yang memiliki distinct personalities, knowledge, dan conversation styles.',
    category: 'AI Assistant',
    logo: '/logos/character.png',
    website: 'https://character.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic character interactions',
      paid: '$9.99/bulan untuk priority access'
    },
    rating: 4.4,
    features: ['Custom character creation', 'Personality training', 'Group conversations', 'Character sharing', 'Memory persistence', 'Voice conversations'],
    pros: ['Unique character interactions', 'Creative possibilities', 'Strong community'],
    cons: ['Can be addictive', 'Quality varies per character', 'Content moderation strict']
  },
  {
    id: '80',
    name: 'Poe',
    slug: 'poe',
    description: 'Platform untuk access multiple AI models dalam satu interface dari Quora.',
    fullDescription: 'Poe oleh Quora menyediakan access ke multiple AI models seperti GPT-4, Claude, dan lainnya dalam single interface, memungkinkan comparison dan specialized use cases.',
    category: 'AI Assistant',
    logo: '/logos/poe.png',
    website: 'https://poe.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited access to premium models',
      paid: '$19.99/bulan untuk unlimited access'
    },
    rating: 4.3,
    features: ['Multiple AI models', 'Model comparison', 'Bot creation', 'API access', 'Conversation history', 'Mobile app'],
    pros: ['Access multiple models', 'Easy comparison', 'Good mobile experience'],
    cons: ['Subscription untuk best models', 'Limited free usage', 'Interface sometimes laggy']
  },

  // Continue with remaining tools to reach 100
  {
    id: '81',
    name: 'Namelix',
    slug: 'namelix',
    description: 'AI business name generator yang create unique dan brandable business names.',
    fullDescription: 'Namelix menggunakan AI untuk generate business names yang short, brandable, dan memorable berdasarkan keywords dan industry preferences.',
    category: 'Business',
    logo: '/logos/namelix.png',
    website: 'https://namelix.com',
    pricing: 'free',
    pricingDetails: {
      free: 'Gratis untuk name generation'
    },
    rating: 4.1,
    features: ['AI name generation', 'Logo creation', 'Domain availability', 'Industry filtering', 'Length preferences', 'Style customization'],
    pros: ['Completely free', 'Unique name suggestions', 'Logo included'],
    cons: ['Basic logo quality', 'Limited customization', 'Domain check tidak realtime']
  },
  {
    id: '82',
    name: 'Wordtune',
    slug: 'wordtune',
    description: 'AI writing assistant untuk rewrite dan improve text clarity, tone, dan style.',
    fullDescription: 'Wordtune menggunakan AI untuk help users rewrite sentences dan paragraphs untuk improve clarity, change tone, atau optimize untuk different audiences.',
    category: 'Writing',
    logo: '/logos/wordtune.png',
    website: 'https://wordtune.com',
    pricing: 'freemium',
    pricingDetails: {
      free: '10 rewrites per hari',
      paid: 'Mulai dari $9.99/bulan'
    },
    rating: 4.3,
    features: ['Text rewriting', 'Tone adjustment', 'Length control', 'Browser extension', 'Multiple suggestions', 'Grammar checking'],
    pros: ['Good rewriting quality', 'Multiple style options', 'Easy to use'],
    cons: ['Limited free usage', 'Subscription untuk unlimited', 'English focused']
  },
  {
    id: '83',
    name: 'Framer AI',
    slug: 'framer-ai',
    description: 'Web design platform dengan AI untuk generate websites dari text prompts.',
    fullDescription: 'Framer AI memungkinkan users untuk generate complete websites dari text descriptions, termasuk layout, content, dan styling dengan professional results.',
    category: 'Design',
    logo: '/logos/framer.png',
    website: 'https://framer.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features',
      paid: 'Mulai dari $15/bulan'
    },
    rating: 4.2,
    features: ['AI website generation', 'Responsive design', 'Component library', 'Animation tools', 'CMS integration', 'Collaboration'],
    pros: ['Professional output', 'Modern design tools', 'Good animations'],
    cons: ['Learning curve', 'Subscription untuk advanced features', 'Can be complex']
  },
  {
    id: '84',
    name: 'Opus Clip',
    slug: 'opus-clip',
    description: 'AI video editor yang mengubah long-form videos menjadi viral short clips.',
    fullDescription: 'Opus Clip menggunakan AI untuk analyze long-form videos dan automatically create engaging short clips yang optimized untuk social media platforms.',
    category: 'Video',
    logo: '/logos/opus.png',
    website: 'https://opus.pro',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited clips per bulan',
      paid: 'Mulai dari $9.99/bulan'
    },
    rating: 4.4,
    features: ['AI clip generation', 'Viral score prediction', 'Auto captions', 'Social media optimization', 'Batch processing', 'Brand customization'],
    pros: ['Saves editing time', 'Good viral prediction', 'Auto captions accurate'],
    cons: ['Limited free tier', 'Quality depends on source video', 'Subscription required']
  },
  {
    id: '85',
    name: 'Scribe',
    slug: 'scribe',
    description: 'AI documentation tool yang otomatis create step-by-step guides dan tutorials.',
    fullDescription: 'Scribe automatically captures browser activities dan converts them menjadi step-by-step documentation dengan screenshots dan instructions.',
    category: 'Business',
    logo: '/logos/scribe.png',
    website: 'https://scribehow.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic captures',
      paid: 'Mulai dari $12/bulan per seat'
    },
    rating: 4.3,
    features: ['Auto documentation', 'Screenshot capture', 'Step-by-step guides', 'Team sharing', 'Brand customization', 'Analytics'],
    pros: ['Saves documentation time', 'Accurate captures', 'Easy sharing'],
    cons: ['Limited free features', 'Browser-based only', 'Editing capabilities basic']
  },
  {
    id: '86',
    name: 'Mem',
    slug: 'mem',
    description: 'AI note-taking app yang otomatis organize dan connect related information.',
    fullDescription: 'Mem adalah note-taking app yang menggunakan AI untuk automatically organize notes, find connections, dan surface relevant information saat dibutuhkan.',
    category: 'Business',
    logo: '/logos/mem.png',
    website: 'https://mem.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic features',
      paid: '$8.33/bulan untuk AI features'
    },
    rating: 4.0,
    features: ['AI organization', 'Smart search', 'Auto-tagging', 'Connection discovery', 'Template suggestions', 'Collaboration'],
    pros: ['Intelligent organization', 'Good search capabilities', 'Minimal setup required'],
    cons: ['AI features memerlukan subscription', 'Limited formatting', 'Steep learning curve']
  },
  {
    id: '87',
    name: 'Replit AI',
    slug: 'replit-ai',
    description: 'Cloud IDE dengan AI coding assistant untuk collaborative programming dan learning.',
    fullDescription: 'Replit AI adalah cloud-based IDE dengan built-in AI assistant yang membantu dengan coding, debugging, dan explaining code dalam collaborative environment.',
    category: 'Code',
    logo: '/logos/replit.png',
    website: 'https://replit.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic IDE features',
      paid: 'Mulai dari $7/bulan untuk AI features'
    },
    rating: 4.2,
    features: ['Cloud IDE', 'AI code assistance', 'Collaborative coding', 'Multiple languages', 'Instant deployment', 'Version control'],
    pros: ['No setup required', 'Great untuk learning', 'Collaborative features'],
    cons: ['Internet dependent', 'Performance limitations', 'AI features paid']
  },
  {
    id: '88',
    name: 'Upscayl',
    slug: 'upscayl',
    description: 'Free dan open-source AI image upscaler untuk meningkatkan resolusi dan quality photos.',
    fullDescription: 'Upscayl adalah free dan open-source AI image upscaler yang menggunakan Real-ESRGAN untuk increase image resolution dan improve quality tanpa losing details.',
    category: 'Image Generation',
    logo: '/logos/upscayl.png',
    website: 'https://upscayl.github.io',
    pricing: 'free',
    pricingDetails: {
      free: 'Completely free dan open source'
    },
    rating: 4.5,
    features: ['AI image upscaling', 'Multiple upscaling models', 'Batch processing', 'Cross-platform', 'Offline processing', 'No file size limits'],
    pros: ['Completely free', 'Excellent results', 'Privacy-focused (offline)'],
    cons: ['Requires software installation', 'Processing time dapat lama', 'Technical untuk non-tech users']
  },
  {
    id: '89',
    name: 'Stability AI',
    slug: 'stability-ai',
    description: 'Platform AI generative untuk images, videos, dan multimedia content creation.',
    fullDescription: 'Stability AI menyediakan berbagai AI models untuk generative content creation, termasuk Stable Diffusion untuk images dan tools lainnya untuk creative applications.',
    category: 'Image Generation',
    logo: '/logos/stability.png',
    website: 'https://stability.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Community access',
      paid: 'API pricing varies'
    },
    rating: 4.3,
    features: ['Multiple AI models', 'API access', 'Community models', 'Open source options', 'Commercial licensing', 'Developer tools'],
    pros: ['Cutting-edge models', 'Open source commitment', 'Developer-friendly'],
    cons: ['Technical focus', 'Pricing complexity', 'Limited user interface']
  },
  {
    id: '90',
    name: 'Perplexity Labs',
    slug: 'perplexity-labs',
    description: 'Experimental AI playground untuk testing cutting-edge language models dan features.',
    fullDescription: 'Perplexity Labs adalah experimental platform untuk testing advanced AI models dan features sebelum dirilis ke main Perplexity platform.',
    category: 'AI Assistant',
    logo: '/logos/perplexity.png',
    website: 'https://labs.perplexity.ai',
    pricing: 'free',
    pricingDetails: {
      free: 'Experimental access gratis'
    },
    rating: 4.1,
    features: ['Experimental models', 'Advanced features testing', 'Research access', 'Community feedback', 'Bleeding-edge AI', 'Developer insights'],
    pros: ['Access to latest models', 'Free experimental access', 'Research-focused'],
    cons: ['Experimental stability', 'Limited support', 'Features dapat berubah']
  },

  // Final 10 tools (91-100)
  {
    id: '91',
    name: 'Ideogram',
    slug: 'ideogram',
    description: 'AI image generator yang sangat baik dalam creating images dengan text dan typography.',
    fullDescription: 'Ideogram adalah AI image generator yang specializes dalam creating images dengan text elements, typography, dan complex compositions dengan high fidelity.',
    category: 'Image Generation',
    logo: '/logos/ideogram.png',
    website: 'https://ideogram.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited generations',
      paid: 'Mulai dari $7/bulan'
    },
    rating: 4.4,
    features: ['Text-aware generation', 'Typography rendering', 'Style consistency', 'High resolution output', 'Commercial usage', 'API access'],
    pros: ['Excellent text rendering', 'Consistent results', 'Good typography'],
    cons: ['Limited free tier', 'Focused pada text/typography', 'Newer platform']
  },
  {
    id: '92',
    name: 'Krea',
    slug: 'krea',
    description: 'Real-time AI image generation dengan instant feedback dan creative control.',
    fullDescription: 'Krea menyediakan real-time AI image generation dengan instant visual feedback, memungkinkan creative experimentation dengan immediate results.',
    category: 'Image Generation',
    logo: '/logos/krea.png',
    website: 'https://krea.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited real-time generations',
      paid: 'Mulai dari $12/bulan'
    },
    rating: 4.2,
    features: ['Real-time generation', 'Instant feedback', 'Creative controls', 'Style mixing', 'Animation tools', 'Community sharing'],
    pros: ['Real-time interaction', 'Creative experimentation', 'Intuitive interface'],
    cons: ['Requires good internet', 'Limited free usage', 'Resource intensive']
  },
  {
    id: '93',
    name: 'You.com',
    slug: 'you-com',
    description: 'AI search engine yang memberikan conversational answers dengan source citations.',
    fullDescription: 'You.com adalah AI-powered search engine yang menyediakan conversational search experience dengan accurate answers dan proper source citations.',
    category: 'AI Assistant',
    logo: '/logos/you.png',
    website: 'https://you.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic search dan chat',
      paid: '$15/bulan untuk advanced features'
    },
    rating: 4.0,
    features: ['AI search', 'Conversational interface', 'Source citations', 'Multiple AI modes', 'Privacy focused', 'Code generation'],
    pros: ['Good search accuracy', 'Privacy-focused', 'Multiple AI models'],
    cons: ['Smaller index than Google', 'Limited adoption', 'Features masih developing']
  },
  {
    id: '94',
    name: 'Stable Video',
    slug: 'stable-video',
    description: 'AI video generation dari Stability AI untuk creating videos dari images dan text.',
    fullDescription: 'Stable Video Diffusion dari Stability AI memungkinkan generation videos dari static images atau text prompts dengan control atas motion dan style.',
    category: 'Video',
    logo: '/logos/stablevideo.png',
    website: 'https://stability.ai/stable-video',
    pricing: 'paid',
    pricingDetails: {
      paid: 'API pricing, credit-based'
    },
    rating: 4.0,
    features: ['Video generation dari images', 'Text-to-video', 'Motion control', 'Style consistency', 'API access', 'Commercial licensing'],
    pros: ['Cutting-edge technology', 'High quality output', 'Developer-friendly'],
    cons: ['Expensive untuk regular use', 'Technical setup required', 'Limited duration']
  },
  {
    id: '95',
    name: 'Phind',
    slug: 'phind',
    description: 'AI search engine khusus untuk developers dengan focus pada coding dan technical questions.',
    fullDescription: 'Phind adalah AI-powered search engine yang dirancang khusus untuk developers, memberikan accurate answers untuk coding questions dan technical problems.',
    category: 'Code',
    logo: '/logos/phind.png',
    website: 'https://phind.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Basic searches',
      paid: '$10/bulan untuk unlimited'
    },
    rating: 4.3,
    features: ['Developer-focused search', 'Code examples', 'Technical explanations', 'Multiple programming languages', 'Documentation search', 'Problem solving'],
    pros: ['Excellent untuk coding questions', 'Accurate technical answers', 'Good code examples'],
    cons: ['Niche focus', 'Limited non-coding use', 'Subscription untuk heavy use']
  },
  {
    id: '96',
    name: 'Cody',
    slug: 'cody',
    description: 'AI coding assistant dari Sourcegraph dengan codebase understanding dan context awareness.',
    fullDescription: 'Cody adalah AI coding assistant yang understands your entire codebase untuk provide contextually relevant code suggestions, explanations, dan refactoring.',
    category: 'Code',
    logo: '/logos/cody.png',
    website: 'https://cody.dev',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited usage',
      paid: 'Mulai dari $9/bulan'
    },
    rating: 4.1,
    features: ['Codebase understanding', 'Context-aware suggestions', 'Code explanation', 'Refactoring assistance', 'Multiple IDEs', 'Enterprise features'],
    pros: ['Understands full codebase', 'Good context awareness', 'Enterprise ready'],
    cons: ['Requires codebase indexing', 'Subscription untuk full features', 'Setup complexity']
  },
  {
    id: '97',
    name: 'Sider',
    slug: 'sider',
    description: 'AI browser extension yang menambahkan ChatGPT ke any website untuk instant assistance.',
    fullDescription: 'Sider adalah browser extension yang mengintegrasikan AI assistance ke any website, memberikan instant help dengan reading, writing, dan research tasks.',
    category: 'AI Assistant',
    logo: '/logos/sider.png',
    website: 'https://sider.ai',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited daily queries',
      paid: 'Mulai dari $8.33/bulan'
    },
    rating: 4.2,
    features: ['Browser extension', 'Any website integration', 'Multiple AI models', 'Reading assistance', 'Writing help', 'Research tools'],
    pros: ['Works di any website', 'Multiple AI models', 'Convenient access'],
    cons: ['Extension dependency', 'Subscription untuk unlimited', 'Privacy considerations']
  },
  {
    id: '98',
    name: 'Pika Labs',
    slug: 'pika-labs',
    description: 'AI video generator yang membuat videos dari text prompts dengan cinematic quality.',
    fullDescription: 'Pika Labs menggunakan AI untuk generate high-quality videos dari text descriptions dengan cinematic effects dan smooth motion.',
    category: 'Video',
    logo: '/logos/pika.png',
    website: 'https://pika.art',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited generations',
      paid: 'Credit-based pricing'
    },
    rating: 4.3,
    features: ['Text-to-video generation', 'Cinematic quality', 'Motion control', 'Style variations', 'Community sharing', 'HD output'],
    pros: ['High quality video output', 'Cinematic effects', 'User-friendly interface'],
    cons: ['Limited free usage', 'Processing time', 'Queue waits']
  },
  {
    id: '99',
    name: 'Magnific AI',
    slug: 'magnific-ai',
    description: 'AI image upscaler dan enhancer yang menambahkan details saat memperbesar images.',
    fullDescription: 'Magnific AI tidak hanya upscale images tapi juga menambahkan realistic details dan textures, creating enhanced versions yang lebih detailed dari originals.',
    category: 'Image Generation',
    logo: '/logos/magnific.png',
    website: 'https://magnific.ai',
    pricing: 'paid',
    pricingDetails: {
      paid: 'Credit-based, mulai dari $39/bulan'
    },
    rating: 4.6,
    features: ['AI upscaling', 'Detail enhancement', 'Texture addition', 'Multiple upscale ratios', 'Batch processing', 'Style control'],
    pros: ['Incredible detail enhancement', 'High quality results', 'Professional grade'],
    cons: ['Expensive pricing', 'No free tier', 'Processing time']
  },
  {
    id: '100',
    name: 'Chatsonic',
    slug: 'chatsonic',
    description: 'AI chatbot dengan real-time information access dan multimodal capabilities.',
    fullDescription: 'Chatsonic adalah AI chatbot dari Writesonic yang dapat access real-time information dari internet dan support text, images, dan voice interactions.',
    category: 'AI Assistant',
    logo: '/logos/chatsonic.png',
    website: 'https://chatsonic.com',
    pricing: 'freemium',
    pricingDetails: {
      free: 'Limited words per bulan',
      paid: 'Mulai dari $16/bulan'
    },
    rating: 4.1,
    features: ['Real-time web access', 'Image generation', 'Voice conversations', 'Factual responses', 'Multiple personalities', 'API access'],
    pros: ['Real-time information', 'Multimodal capabilities', 'Factual accuracy'],
    cons: ['Word limits di free tier', 'Subscription pricing', 'Interface kadang laggy']
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
    tool.category.toLowerCase().includes(lowercaseQuery) ||
    tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};