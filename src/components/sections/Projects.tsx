import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = ['All', 'Enterprise', 'E-Commerce', 'SaaS', 'Business', 'CRM'];

const projectImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  2: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
  3: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  4: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  5: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  6: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.07) 0%, transparent 60%), #050508',
      }}
    >
      <div className="container-custom">
        <SectionTitle
          title="Projects"
          badge="My Work"
          subtitle="A showcase of production-grade applications built with the MERN stack."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background:
                  filter === cat
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(6,182,212,0.25))'
                    : 'rgba(13,13,24,0.5)',
                border:
                  filter === cat
                    ? '1px solid rgba(124,58,237,0.5)'
                    : '1px solid rgba(124,58,237,0.1)',
                color: filter === cat ? '#f1f5f9' : '#64748b',
                cursor: 'pointer',
                boxShadow: filter === cat ? '0 0 15px rgba(124,58,237,0.2)' : 'none',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass rounded-2xl overflow-hidden flex flex-col"
                style={{
                  border: '1px solid rgba(124,58,237,0.12)',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.35)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 20px 60px rgba(124,58,237,0.15), 0 0 40px rgba(6,182,212,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.12)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '180px' }}>
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} z-10`}
                  />
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.25) saturate(0.8)',
                    }}
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(13,13,24,0.8)',
                      border: '1px solid rgba(124,58,237,0.3)',
                      color: '#a855f7',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {project.category}
                  </div>
                  {/* Icon */}
                  <div
                    className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(124,58,237,0.2)',
                      border: '1px solid rgba(124,58,237,0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Layers size={18} style={{ color: '#a855f7' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div>
                    <h3
                      className="font-bold text-white mb-2"
                      style={{ fontSize: '1rem', lineHeight: 1.3 }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.7 }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{
                          background: 'rgba(124,58,237,0.08)',
                          border: '1px solid rgba(124,58,237,0.15)',
                          color: '#7c3aed',
                          fontFamily: 'monospace',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{
                          background: 'rgba(6,182,212,0.08)',
                          border: '1px solid rgba(6,182,212,0.15)',
                          color: '#06b6d4',
                        }}
                      >
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: 'rgba(124,58,237,0.1)',
                        border: '1px solid rgba(124,58,237,0.25)',
                        color: '#a855f7',
                        textDecoration: 'none',
                      }}
                    >
                      <FaGithub size={14} />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: 'rgba(6,182,212,0.08)',
                        border: '1px solid rgba(6,182,212,0.2)',
                        color: '#22d3ee',
                        textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
