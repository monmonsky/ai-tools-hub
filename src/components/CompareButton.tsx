"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CompareButton() {
  const [compareList, setCompareList] = useState<string[]>([]);
  const router = useRouter();

  // Load compare list from localStorage
  useEffect(() => {
    const loadCompareList = () => {
      const stored = localStorage.getItem('compareList');
      if (stored) {
        try {
          setCompareList(JSON.parse(stored));
        } catch {
          setCompareList([]);
        }
      }
    };

    // Load initially
    loadCompareList();

    // Listen for storage changes
    const handleStorageChange = () => {
      loadCompareList();
    };

    const handleCustomStorageChange = () => {
      loadCompareList();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('compareListUpdated', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('compareListUpdated', handleCustomStorageChange);
    };
  }, []);

  const handleCompareClick = () => {
    router.push('/compare');
  };

  // Don't show if no tools selected
  if (compareList.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleCompareClick}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full h-14 px-6"
      >
        <Scale className="w-5 h-5 mr-2" />
        Bandingkan
        <Badge
          variant="secondary"
          className="ml-2 bg-white text-purple-600 hover:bg-white"
        >
          {compareList.length}
        </Badge>
      </Button>
    </div>
  );
}