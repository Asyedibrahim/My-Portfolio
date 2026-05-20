export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  tech: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'ILIFE Technologies',
    period: 'Present',
    type: 'Full-time',
    description: [
      'Architected and developed enterprise-grade ERP system with TypeScript and React.js',
      'Built scalable backend services with Node.js and Express.js',
      'Implemented Redis caching strategies reducing API response time by 40%',
      'Developed role-based access control and JWT authentication systems',
      'Collaborated in Agile sprints delivering high-quality features on schedule',
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Express.js'],
    color: '#7c3aed',
  },
  {
    id: 2,
    role: 'Junior Full Stack Developer',
    company: 'Digiplus Agency',
    period: 'Earlier',
    type: 'Full-time',
    description: [
      'Built and maintained MERN stack applications for multiple clients',
      'Developed RESTful APIs with proper documentation and testing via Postman',
      'Created reusable React components improving development efficiency by 30%',
      'Integrated third-party APIs and payment gateways for client projects',
      'Contributed to CRM platform serving digital agency operations',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'Bootstrap'],
    color: '#06b6d4',
  },
  {
    id: 3,
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: 'Ongoing',
    type: 'Freelance',
    description: [
      'Delivered full-stack e-commerce platform for Al-Halal Footwear brand',
      'Built visa consultancy management platform for Visa Scout LLC',
      'Developed salon billing system with comprehensive business logic',
      'Managed end-to-end project delivery from design to deployment',
      'Provided VPS hosting setup and CI/CD configuration for client projects',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'Cloudinary', 'Netlify', 'Render'],
    color: '#a855f7',
  },
];
