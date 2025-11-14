export interface MenuItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  submenu?: MenuItem[];
}

export interface MenuState {
  currentMenu: MenuItem[];
  history: MenuItem[][];
  direction: 'forward' | 'backward';
}

