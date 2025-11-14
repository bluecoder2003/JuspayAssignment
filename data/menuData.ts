import { MenuItem } from '@/types/menu';

export const sampleMenuData: MenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'Welcome to our comprehensive platform',
    icon: 'Home',
    submenu: []
  },
  {
    id: 'products-services',
    title: 'Products & Services',
    description: 'Explore our comprehensive offerings',
    icon: 'Package',
    submenu: [
      {
        id: 'software-solutions',
        title: 'Software Solutions',
        description: 'Custom software development',
        icon: 'Code2',
      },
      {
        id: 'cloud-services',
        title: 'Cloud Services',
        description: 'Scalable cloud solutions',
        icon: 'Cloud',
      },
      {
        id: 'consulting',
        title: 'Consulting',
        description: 'Expert guidance and support',
        icon: 'Users',
      }
    ]
  },
  {
    id: 'industry-solutions',
    title: 'Industry Solutions',
    description: 'Specialized solutions for different industries',
    icon: 'Building2',
    submenu: [
      {
        id: 'healthcare',
        title: 'Healthcare',
        description: 'Healthcare technology solutions',
        icon: 'Heart',
      },
      {
        id: 'finance',
        title: 'Finance',
        description: 'Financial services technology',
        icon: 'DollarSign',
      },
      {
        id: 'retail',
        title: 'Retail',
        description: 'Retail and e-commerce solutions',
        icon: 'ShoppingCart',
      }
    ]
  },
  {
    id: 'company',
    title: 'Company',
    description: 'Learn about our organization and culture',
    icon: 'Users',
    submenu: [
      {
        id: 'about-us',
        title: 'About Us',
        description: 'Our mission and values',
        icon: 'Info',
      },
      {
        id: 'leadership',
        title: 'Leadership',
        description: 'Meet our leadership team',
        icon: 'Award',
      },
      {
        id: 'careers',
        title: 'Careers',
        description: 'Join our team',
        icon: 'Briefcase',
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    description: 'Knowledge base, tools, and learning materials',
    icon: 'BookOpen',
    submenu: [
      {
        id: 'documentation',
        title: 'Documentation',
        description: 'Technical documentation',
        icon: 'FileText',
      },
      {
        id: 'tutorials',
        title: 'Tutorials',
        description: 'Step-by-step guides',
        icon: 'GraduationCap',
      },
      {
        id: 'blog',
        title: 'Blog',
        description: 'Latest news and insights',
        icon: 'Newspaper',
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Get help and support when you need it',
    icon: 'HelpCircle',
    submenu: [
      {
        id: 'help-center',
        title: 'Help Center',
        description: 'Find answers to common questions',
        icon: 'MessageCircle',
      },
      {
        id: 'contact-support',
        title: 'Contact Support',
        description: 'Reach out to our support team',
        icon: 'Phone',
      },
      {
        id: 'community',
        title: 'Community',
        description: 'Join our community forums',
        icon: 'Users',
      }
    ]
  },
  {
    id: 'research-innovation',
    title: 'Research & Innovation',
    description: 'Cutting-edge research and innovation initiatives',
    icon: 'Lightbulb',
    submenu: [
      {
        id: 'research-projects',
        title: 'Research Projects',
        description: 'Current research initiatives',
        icon: 'FlaskConical',
      },
      {
        id: 'innovation-lab',
        title: 'Innovation Lab',
        description: 'Experimental technologies',
        icon: 'Rocket',
      },
      {
        id: 'partnerships',
        title: 'Partnerships',
        description: 'Academic and industry partnerships',
        icon: 'Handshake',
      }
    ]
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description: 'Environmental responsibility and sustainable technology',
    icon: 'Leaf',
    submenu: [
      {
        id: 'green-initiatives',
        title: 'Green Initiatives',
        description: 'Environmental programs',
        icon: 'Trees',
      },
      {
        id: 'carbon-neutral',
        title: 'Carbon Neutral',
        description: 'Our carbon neutrality goals',
        icon: 'Wind',
      },
      {
        id: 'sustainable-tech',
        title: 'Sustainable Technology',
        description: 'Eco-friendly solutions',
        icon: 'Recycle',
      }
    ]
  },
  {
    id: 'investor-relations',
    title: 'Investor Relations',
    description: 'Financial information and investor resources',
    icon: 'TrendingUp',
    submenu: [
      {
        id: 'financial-reports',
        title: 'Financial Reports',
        description: 'Quarterly and annual reports',
        icon: 'FileSpreadsheet',
      },
      {
        id: 'stock-info',
        title: 'Stock Information',
        description: 'Current stock data',
        icon: 'BarChart3',
      },
      {
        id: 'investor-events',
        title: 'Investor Events',
        description: 'Upcoming events and webcasts',
        icon: 'Calendar',
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with our team',
    icon: 'Mail',
    submenu: [
      {
        id: 'contact-form',
        title: 'Contact Form',
        description: 'Send us a message',
        icon: 'Send',
      },
      {
        id: 'locations',
        title: 'Locations',
        description: 'Our office locations',
        icon: 'MapPin',
      },
      {
        id: 'social-media',
        title: 'Social Media',
        description: 'Follow us on social media',
        icon: 'Share2',
      }
    ]
  }
];

