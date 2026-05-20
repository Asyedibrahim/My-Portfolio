import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experience';
import { MapPin, Building2, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(6,182,212,0.05) 0%, transparent 60%), #050508',
      }}
    >
      <div className="container-custom">
        <SectionTitle
          title="Experience"
          badge="Career Journey"
          subtitle="My professional path building impactful applications."
        />

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(10,10,20,0.65)',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}35`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${exp.color}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${exp.color}, #06b6d4, transparent)`,
                }}
              />

              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{
                  background: `linear-gradient(180deg, ${exp.color}, transparent)`,
                  opacity: 0.7,
                }}
              />

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

                  {/* Left column: meta */}
                  <div className="md:col-span-1 flex flex-col gap-4">
                    {/* Step number */}
                    <div
                      className="font-black leading-none select-none"
                      style={{
                        fontSize: '4.5rem',
                        color: `${exp.color}14`,
                        lineHeight: 1,
                        fontFamily: 'Outfit, sans-serif',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Role */}
                    <div>
                      <h3
                        className="font-bold leading-snug mb-3 text-white"
                        style={{ fontSize: '1.1rem' }}
                      >
                        {exp.role}
                      </h3>

                      {/* Company badge */}
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl mb-2"
                        style={{
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}30`,
                        }}
                      >
                        <Building2 size={12} style={{ color: exp.color }} />
                        <span style={{ color: exp.color, fontWeight: 600, fontSize: '0.8rem' }}>
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 flex-wrap mt-2">
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                          style={{
                            background: 'rgba(124,58,237,0.08)',
                            border: '1px solid rgba(124,58,237,0.18)',
                          }}
                        >
                          <Briefcase size={11} style={{ color: '#7c3aed' }} />
                          <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{exp.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={11} style={{ color: '#334155' }} />
                          <span style={{ color: '#334155', fontSize: '0.72rem' }}>Tamil Nadu</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs"
                          style={{
                            background: `${exp.color}0e`,
                            border: `1px solid ${exp.color}22`,
                            color: '#64748b',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right column: contributions */}
                  <div className="md:col-span-2">
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-5"
                      style={{ color: '#1e293b' }}
                    >
                      Key Contributions
                    </p>

                    <ul className="flex flex-col gap-3.5">
                      {exp.description.map((point, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold mt-0.5"
                            style={{
                              background: `${exp.color}18`,
                              border: `1px solid ${exp.color}30`,
                              color: exp.color,
                              fontSize: '0.65rem',
                              minWidth: '1.25rem',
                            }}
                          >
                            {j + 1}
                          </div>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.75 }}>
                            {point}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
