export interface Skill {
  name: string;
  icon?: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Redux', color: '#764ABC' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Bootstrap', color: '#7952B3' },
      { name: 'Flowbite', color: '#1D4ED8' },
      { name: 'Framer Motion', color: '#FF0055' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚡',
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#000000' },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', color: '#47A248' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'Redis', color: '#DC382D' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#181717' },
      { name: 'Postman', color: '#FF6C37' },
      { name: 'Cloudinary', color: '#3448C5' },
      { name: 'Netlify', color: '#00C7B7' },
      { name: 'Render', color: '#46E3B7' },
      { name: 'VPS Hosting', color: '#FF6B6B' },
    ],
  },
  {
    title: 'Concepts',
    icon: '💡',
    skills: [
      { name: 'REST APIs', color: '#7C3AED' },
      { name: 'JWT Authentication', color: '#06B6D4' },
      { name: 'MVC Architecture', color: '#A855F7' },
      { name: 'Agile Methodology', color: '#22D3EE' },
      { name: 'Deployment', color: '#34D399' },
    ],
  },
];
