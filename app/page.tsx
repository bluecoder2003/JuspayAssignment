'use client';

import { useState } from 'react';
import { AnimatedDrawer } from '@/components/AnimatedDrawer';
import { sampleMenuData } from '@/data/menuData';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold text-lg hover:bg-blue-600 active:bg-blue-700 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label="Open menu"
      >
        Open Menu
      </button>

      <AnimatedDrawer
        menuItems={sampleMenuData}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="IT Services"
      />
    </div>
  );
}
