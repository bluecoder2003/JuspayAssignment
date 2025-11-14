import React from 'react';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { MenuItem as MenuItemType } from '@/types/menu';

interface MenuItemProps {
  item: MenuItemType;
  onClick: (item: MenuItemType) => void;
  index?: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, onClick, index }) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  
  const IconComponent = item.icon 
    ? (Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>) 
    : null;

  const handleClick = () => {
    onClick(item);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(item);
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="w-full group text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
      aria-label={`${item.title}${item.description ? `: ${item.description}` : ''}`}
      role="menuitem"
      tabIndex={0}
    >
      <div className="flex items-start gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors">
        {IconComponent && (
          <div className="flex-shrink-0 mt-0.5">
            <div className="flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-black" />
            </div>
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-black mb-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-500 leading-snug">
              {item.description}
            </p>
          )}
        </div>
        
        {hasSubmenu && (
          <div className="flex-shrink-0">
            <ChevronRight className="w-5 h-5 text-black group-hover:text-gray-600 transition-colors" />
          </div>
        )}
      </div>
    </button>
  );
};

