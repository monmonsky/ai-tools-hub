#!/bin/bash

# Quick ESLint fixes for build
echo "🔧 Fixing ESLint errors..."

# Remove unused imports from ToolCard
sed -i '' 's/import.*MessageSquare.*Bot.*ImageIcon.*Palette.*Github.*PenTool.*Mic.*Video.*Search.*Monitor.*Zap.*Brain.*Sparkles.*Camera.*FileText.*Volume2.*Play.*Globe.*from "lucide-react";/import { Plus, Scale } from "lucide-react";/' src/components/ToolCard.tsx

# Remove unused imports from compare page
sed -i '' 's/import { Card, CardContent, CardHeader, CardTitle }/import { Card, CardContent }/' src/app/compare/page.tsx

# Remove unused import from layout
sed -i '' 's/import { siteConfig } from "@\/lib\/config";//' src/app/layout.tsx

# Remove unused imports from tools page
sed -i '' 's/import { tools, categories, Tool }/import { tools, categories }/' src/app/tools/page.tsx

# Remove unused imports from tools/[slug] page
sed -i '' 's/import { getToolBySlug, notFound }/import { getToolBySlug }/' src/app/tools/[slug]/page.tsx

# Remove unused imports from hero component
sed -i '' 's/import { Button } from "@\/components\/ui\/button";//' src/components/hero.tsx
sed -i '' 's/import { Input } from "@\/components\/ui\/input";//' src/components/hero.tsx

# Fix quotes in remaining files
echo "🔤 Fixing escaped quotes..."

# Fix tools page quotes
sed -i '' 's/Jelajahi "Direktori AI Tools" terlengkap/Jelajahi &quot;Direktori AI Tools&quot; terlengkap/' src/app/tools/page.tsx
sed -i '' "s/Don't see your favorite tool?/Don\&apos;t see your favorite tool?/" src/app/tools/page.tsx

# Fix search component quotes
sed -i '' 's/Type "ChatGPT"/Type \&quot;ChatGPT\&quot;/' src/components/SearchWithSuggestions.tsx

# Fix tools/[slug] quotes
sed -i '' "s/Claude's/Claude\&apos;s/" src/app/tools/[slug]/page.tsx

echo "✅ ESLint fixes applied!"
echo "🔧 Run: npm run build"