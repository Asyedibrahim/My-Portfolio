import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import {
  SiReact, 
  SiTypescript, 
  SiRedux, 
  SiTailwindcss, 
  // SiBootstrap, 
  // SiFramer,
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiRedis, 
  // SiGit, 
  SiGithub,
  // SiPostman, 
  // SiCloudinary, 
  // SiNetlify, 
  // SiRender,
} from 'react-icons/si';
import { 
  Globe, 
  // ShieldCheck, 
  // Layers3, 
  // Repeat2, 
  Server, 
  // Package 
} from 'lucide-react';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

type AnyIcon = IconType | LucideIcon;

interface Skill {
  name: string;
  icon: AnyIcon;
  color: string;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js',       icon: SiReact as AnyIcon,        color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript',     icon: SiTypescript as AnyIcon,   color: '#3178C6', category: 'Frontend' },
  { name: 'Redux',          icon: SiRedux as AnyIcon,        color: '#764ABC', category: 'Frontend' },
  { name: 'Tailwind CSS',   icon: SiTailwindcss as AnyIcon,  color: '#06B6D4', category: 'Frontend' },
  // { name: 'Bootstrap',      icon: SiBootstrap as AnyIcon,    color: '#7952B3', category: 'Frontend' },
  // { name: 'Framer Motion',  icon: SiFramer as AnyIcon,       color: '#FF0055', category: 'Frontend' },
  // { name: 'Flowbite',       icon: Layers3 as AnyIcon,        color: '#1D4ED8', category: 'Frontend' },

  // Backend
  { name: 'Node.js',        icon: SiNodedotjs as AnyIcon,    color: '#339933', category: 'Backend' },
  { name: 'Express.js',     icon: SiExpress as AnyIcon,      color: '#AAAAAA', category: 'Backend' },

  // Database
  { name: 'MongoDB',        icon: SiMongodb as AnyIcon,      color: '#47A248', category: 'Database' },
  { name: 'MySQL',          icon: SiMysql as AnyIcon,        color: '#4479A1', category: 'Database' },
  { name: 'Redis',          icon: SiRedis as AnyIcon,        color: '#DC382D', category: 'Database' },

  // Tools
  // { name: 'Git',            icon: SiGit as AnyIcon,          color: '#F05032', category: 'Tools' },
  { name: 'GitHub',         icon: SiGithub as AnyIcon,       color: '#E8E8E8', category: 'Tools' },
  // { name: 'Postman',        icon: SiPostman as AnyIcon,      color: '#FF6C37', category: 'Tools' },
  // { name: 'Cloudinary',     icon: SiCloudinary as AnyIcon,   color: '#3448C5', category: 'Tools' },
  // { name: 'Netlify',        icon: SiNetlify as AnyIcon,      color: '#00C7B7', category: 'Tools' },
  // { name: 'Render',         icon: SiRender as AnyIcon,       color: '#46E3B7', category: 'Tools' },
  { name: 'VPS Hosting',    icon: Server as AnyIcon,         color: '#FF6B6B', category: 'Tools' },

  // Concepts
  { name: 'REST APIs',         icon: Globe as AnyIcon,       color: '#7C3AED', category: 'Concepts' },
  // { name: 'JWT Auth',          icon: ShieldCheck as AnyIcon, color: '#06B6D4', category: 'Concepts' },
  // { name: 'MVC Architecture',  icon: Layers3 as AnyIcon,     color: '#A855F7', category: 'Concepts' },
  // { name: 'Agile',             icon: Repeat2 as AnyIcon,     color: '#22D3EE', category: 'Concepts' },
  // { name: 'Deployment',        icon: Package as AnyIcon,     color: '#34D399', category: 'Concepts' },
];

const categoryColors: Record<string, string> = {
  Frontend:  '#7c3aed',
  Backend:   '#06b6d4',
  Database:  '#a855f7',
  Tools:     '#f59e0b',
  Concepts:  '#22d3ee',
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 50% 50% at 20% 50%, rgba(124,58,237,0.06) 0%, transparent 60%), #050508',
      }}
    >
      <div className="container-custom">
        <SectionTitle
          title="Tech Stack"
          badge="Skills"
          subtitle="Technologies I work with to build modern, scalable applications."
        />

        {/* Flat icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -6, scale: 1.06 }}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl group relative overflow-hidden"
                style={{
                  background: 'rgba(13,13,24,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${skill.color}40`;
                  el.style.boxShadow = `0 8px 32px ${skill.color}20, 0 0 0 1px ${skill.color}15`;
                  el.style.background = `rgba(13,13,24,0.85)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.05)';
                  el.style.boxShadow = 'none';
                  el.style.background = 'rgba(13,13,24,0.6)';
                }}
              >
                {/* Category dot */}
                <div
                  className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full opacity-50"
                  style={{ background: categoryColors[skill.category] ?? '#7c3aed' }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `${skill.color}12`,
                    border: `1px solid ${skill.color}25`,
                  }}
                >
                  <Icon size={24} style={{ color: skill.color }} />
                </div>

                {/* Label */}
                <span
                  className="text-center leading-tight font-medium"
                  style={{ color: '#64748b', fontSize: '0.7rem', transition: 'color 0.3s' }}
                  ref={(el) => {
                    if (el) {
                      el.closest('.group')?.addEventListener('mouseenter', () => {
                        el.style.color = '#e2e8f0';
                      });
                      el.closest('.group')?.addEventListener('mouseleave', () => {
                        el.style.color = '#64748b';
                      });
                    }
                  }}
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
              />
              <span style={{ color: '#334155', fontSize: '0.75rem' }}>{cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
