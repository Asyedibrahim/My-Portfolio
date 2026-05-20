export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  // github: string;
  // live: string;
  category: string;
  featured?: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ERP Management System',
    description:
      'A comprehensive Enterprise Resource Planning system built for managing business operations, inventory, HR, finance, and reporting with role-based access control.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
    // github: '#',
    // live: '#',
    category: 'Enterprise',
    featured: true,
    gradient: 'from-purple-600/20 to-cyan-600/20',
  },
  {
    id: 2,
    title: 'Al-Halal Footwear E-Commerce',
    description:
      'Full-featured e-commerce platform with product catalog, cart management, payment integration, admin dashboard, and order tracking for a premium footwear brand.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS', 'Express.js'],
    // github: '#',
    // live: '#',
    category: 'E-Commerce',
    featured: true,
    gradient: 'from-cyan-600/20 to-violet-600/20',
  },
  {
    id: 3,
    title: 'Visa Scout LLC – Consultancy Platform',
    description:
      'A visa consultancy management platform featuring application tracking, document upload system, client portal, and consultant dashboard with real-time updates.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS'],
    // github: '#',
    // live: '#',
    category: 'SaaS',
    featured: true,
    gradient: 'from-violet-600/20 to-pink-600/20',
  },
  {
    id: 4,
    title: 'Salon Billing Web Application',
    description:
      'A billing and appointment management system for salons with service tracking, staff management, customer history, and invoice generation capabilities.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST API'],
    // github: '#',
    // live: '#',
    category: 'Business',
    gradient: 'from-pink-600/20 to-orange-600/20',
  },
  {
    id: 5,
    title: 'Digiplus Agency CRM',
    description:
      'Customer Relationship Management system for a digital agency, featuring lead management, project tracking, client communication, and analytics dashboard.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redux', 'Flowbite', 'Chart.js'],
    // github: '#',
    // live: '#',
    category: 'CRM',
    gradient: 'from-orange-600/20 to-cyan-600/20',
  },
  {
    id: 6,
    title: 'Aqua Supreme Water Purifier CRM',
    description:
      'CRM platform for a water purifier business with customer management, service scheduling, technician dispatch, warranty tracking, and sales reporting.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'JWT Auth'],
    // github: '#',
    // live: '#',
    category: 'CRM',
    gradient: 'from-cyan-600/20 to-purple-600/20',
  },
];
