

'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { MenuItem as MenuItemType } from '@/types/menu';
import { MenuItem } from './MenuItem';

interface AnimatedDrawerProps {
  menuItems: MenuItemType[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const AnimatedDrawer: React.FC<AnimatedDrawerProps> = ({
  menuItems,
  isOpen,
  onClose,
  title = 'Menu'
}) => {
  const [currentMenu, setCurrentMenu] = useState<MenuItemType[]>(menuItems);
  const [menuHistory, setMenuHistory] = useState<MenuItemType[][]>([]);
  const [currentTitle, setCurrentTitle] = useState<string>(title);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Reset menu to root when drawer opens
  useEffect(() => {
    if (isOpen) {
      setCurrentMenu(menuItems);
      setMenuHistory([]);
      setCurrentTitle(title);
    }

  }, [isOpen, menuItems, title]);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  const handleBack = useCallback(() => {
    if (menuHistory.length > 0) {
      const previousMenu = menuHistory[menuHistory.length - 1];
      setCurrentMenu(previousMenu);
      setMenuHistory(menuHistory.slice(0, -1));
      
      if (menuHistory.length === 1) {
        setCurrentTitle(title);
      } else {
        setCurrentTitle(title);
      }
    }
  }, [menuHistory, title]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (menuHistory.length > 0) {
          handleBack();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, menuHistory, onClose, handleBack]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleMenuItemClick = (item: MenuItemType) => {
    if (item.submenu && item.submenu.length > 0) {
      setMenuHistory([...menuHistory, currentMenu]);
      setCurrentMenu(item.submenu);
      setCurrentTitle(item.title);
    } else if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      window.location.href = item.href;
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const drawerVariants = {
    hidden: { 
      y: '100%',
      transition: {
        type: 'spring' as const,
        damping: 30,
        stiffness: 300
      }
    },
    visible: { 
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 30,
        stiffness: 300
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={drawerRef}
            layoutId="drawer-container"
            className="fixed left-4 right-4 z-50 bg-white rounded-3xl shadow-2xl h-fit max-h-[80dvh] flex flex-col focus:outline-none"
            style={{
              bottom: 'max(1rem, env(safe-area-inset-bottom))',
            }}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            role="dialog"
            aria-modal="true"
            aria-label={currentTitle}
            tabIndex={-1}
            layout
            transition={{
              layout: {
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1]
              }
            }}
          >
            <AnimatePresence mode="wait">
              {menuHistory.length > 0 && (
                <motion.div
                  layoutId="drawer-header"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-1 text-sm text-black hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 -ml-1 transition-colors"
                      aria-label="Go back to previous menu"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span className="font-medium text-black">Back</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              layoutId="drawer-content"
              className="flex-1 overflow-y-auto min-h-0 relative scrollbar-hide"
              layout
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.nav
                  key={currentMenu.map(item => item.id).join('-')}
                  layoutId={`menu-level-${menuHistory.length}`}
                  initial={menuHistory.length === 0 ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.32, 0.72, 0, 1],
                    layout: {
                      duration: 0.4,
                      ease: [0.32, 0.72, 0, 1]
                    }
                  }}
                  className="px-2 py-2"
                  role="menu"
                  aria-label={currentTitle}
                  layout
                >
                  {currentMenu.map((item, index) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      onClick={handleMenuItemClick}
                      index={index}
                    />
                  ))}
                </motion.nav>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
