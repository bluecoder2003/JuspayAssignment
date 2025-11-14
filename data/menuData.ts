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
        submenu: [
          {
            id: 'web-development',
            title: 'Web Development',
            description: 'Modern web applications',
            icon: 'Globe',
            submenu: [
              {
                id: 'frontend',
                title: 'Frontend Development',
                description: 'React, Vue, Angular',
                icon: 'Layout',
              },
              {
                id: 'backend',
                title: 'Backend Development',
                description: 'Node.js, Python, Java',
                icon: 'Database',
              },
              {
                id: 'fullstack',
                title: 'Full Stack Development',
                description: 'End-to-end solutions',
                icon: 'Layers',
              }
            ]
          },
          {
            id: 'mobile-development',
            title: 'Mobile Development',
            description: 'iOS and Android apps',
            icon: 'Smartphone',
            submenu: [
              {
                id: 'ios-dev',
                title: 'iOS Development',
                description: 'Native iOS applications',
                icon: 'Apple',
              },
              {
                id: 'android-dev',
                title: 'Android Development',
                description: 'Native Android applications',
                icon: 'Smartphone',
              },
              {
                id: 'cross-platform',
                title: 'Cross-Platform',
                description: 'React Native, Flutter',
                icon: 'Tablets',
              }
            ]
          },
          {
            id: 'enterprise-software',
            title: 'Enterprise Software',
            description: 'Large-scale business solutions',
            icon: 'Building',
          }
        ]
      },
      {
        id: 'cloud-services',
        title: 'Cloud Services',
        description: 'Scalable cloud solutions',
        icon: 'Cloud',
        submenu: [
          {
            id: 'cloud-infrastructure',
            title: 'Cloud Infrastructure',
            description: 'AWS, Azure, Google Cloud',
            icon: 'Server',
          },
          {
            id: 'cloud-migration',
            title: 'Cloud Migration',
            description: 'Seamless cloud transition',
            icon: 'ArrowUpCircle',
          },
          {
            id: 'cloud-security',
            title: 'Cloud Security',
            description: 'Secure cloud environments',
            icon: 'Shield',
          }
        ]
      },
      {
        id: 'consulting',
        title: 'Consulting',
        description: 'Expert guidance and support',
        icon: 'Users',
        submenu: [
          {
            id: 'tech-consulting',
            title: 'Technology Consulting',
            description: 'Strategic technology advice',
            icon: 'Lightbulb',
          },
          {
            id: 'digital-transformation',
            title: 'Digital Transformation',
            description: 'Modernize your business',
            icon: 'Zap',
          },
          {
            id: 'security-consulting',
            title: 'Security Consulting',
            description: 'Cybersecurity expertise',
            icon: 'Lock',
          }
        ]
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
        submenu: [
          {
            id: 'api-docs',
            title: 'API Documentation',
            description: 'RESTful API reference',
            icon: 'Code',
            submenu: [
              {
                id: 'api-getting-started',
                title: 'Getting Started',
                description: 'Quick start guide',
                icon: 'PlayCircle',
              },
              {
                id: 'api-authentication',
                title: 'Authentication',
                description: 'API authentication methods',
                icon: 'Key',
              },
              {
                id: 'api-endpoints',
                title: 'API Endpoints',
                description: 'Complete endpoint reference',
                icon: 'List',
              }
            ]
          },
          {
            id: 'sdk-docs',
            title: 'SDK Documentation',
            description: 'Software development kits',
            icon: 'Package',
          },
          {
            id: 'integration-guides',
            title: 'Integration Guides',
            description: 'Third-party integrations',
            icon: 'Link',
          }
        ]
      },
      {
        id: 'tutorials',
        title: 'Tutorials',
        description: 'Step-by-step guides',
        icon: 'GraduationCap',
        submenu: [
          {
            id: 'beginner-tutorials',
            title: 'Beginner Tutorials',
            description: 'Start your journey',
            icon: 'BookOpen',
          },
          {
            id: 'advanced-tutorials',
            title: 'Advanced Tutorials',
            description: 'Deep dive into complex topics',
            icon: 'BookMarked',
          },
          {
            id: 'video-tutorials',
            title: 'Video Tutorials',
            description: 'Watch and learn',
            icon: 'Video',
          }
        ]
      },
      {
        id: 'blog',
        title: 'Blog',
        description: 'Latest news and insights',
        icon: 'Newspaper',
        submenu: [
          {
            id: 'tech-blog',
            title: 'Technology Blog',
            description: 'Technical articles',
            icon: 'Code2',
          },
          {
            id: 'company-news',
            title: 'Company News',
            description: 'Latest updates',
            icon: 'Newspaper',
          },
          {
            id: 'case-studies',
            title: 'Case Studies',
            description: 'Success stories',
            icon: 'FileCheck',
          }
        ]
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
        submenu: [
          {
            id: 'faqs',
            title: 'FAQs',
            description: 'Frequently asked questions',
            icon: 'HelpCircle',
            submenu: [
              {
                id: 'account-faqs',
                title: 'Account FAQs',
                description: 'Account-related questions',
                icon: 'User',
              },
              {
                id: 'billing-faqs',
                title: 'Billing FAQs',
                description: 'Payment and billing questions',
                icon: 'CreditCard',
              },
              {
                id: 'technical-faqs',
                title: 'Technical FAQs',
                description: 'Technical support questions',
                icon: 'Settings',
              }
            ]
          },
          {
            id: 'troubleshooting',
            title: 'Troubleshooting',
            description: 'Common issues and solutions',
            icon: 'AlertCircle',
          },
          {
            id: 'knowledge-base',
            title: 'Knowledge Base',
            description: 'Comprehensive help articles',
            icon: 'Book',
          }
        ]
      },
      {
        id: 'contact-support',
        title: 'Contact Support',
        description: 'Reach out to our support team',
        icon: 'Phone',
        submenu: [
          {
            id: 'email-support',
            title: 'Email Support',
            description: 'Send us an email',
            icon: 'Mail',
          },
          {
            id: 'live-chat',
            title: 'Live Chat',
            description: 'Chat with our team',
            icon: 'MessageSquare',
          },
          {
            id: 'phone-support',
            title: 'Phone Support',
            description: 'Call our support line',
            icon: 'Phone',
          }
        ]
      },
      {
        id: 'community',
        title: 'Community',
        description: 'Join our community forums',
        icon: 'Users',
        submenu: [
          {
            id: 'forums',
            title: 'Forums',
            description: 'Discussion forums',
            icon: 'MessageCircle',
          },
          {
            id: 'user-groups',
            title: 'User Groups',
            description: 'Connect with other users',
            icon: 'Users',
          },
          {
            id: 'events',
            title: 'Events',
            description: 'Community events and meetups',
            icon: 'Calendar',
          }
        ]
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

