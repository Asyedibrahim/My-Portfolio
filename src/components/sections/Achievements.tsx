import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Trophy, Code2, Users, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: 16,
    suffix: '+',
    label: 'Months Experience',
    description: 'Full-time and freelance combined',
    color: '#7c3aed',
  },
  {
    icon: Code2,
    value: 6,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'From ERP to e-commerce platforms',
    color: '#06b6d4',
  },
  {
    icon: Users,
    value: 5,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied with production results',
    color: '#a855f7',
  },
  {
    icon: Rocket,
    value: 10,
    suffix: '+',
    label: 'Tech Mastered',
    description: 'MERN stack and beyond',
    color: '#22d3ee',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = duration / value;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-bold gradient-text" style={{ fontSize: '3rem', lineHeight: 1 }}>
      {count}
      {suffix}
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 60%), #050508',
      }}
    >
      <div className="container-custom">
        <SectionTitle
          title="By The Numbers"
          badge="Achievements"
          subtitle="A snapshot of my professional journey and impact."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass rounded-2xl p-8 flex flex-col items-center text-center gap-4 gradient-border"
                style={{
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${stat.color}25, 0 20px 60px ${stat.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center pulse-glow-animation"
                  style={{
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}30`,
                    boxShadow: `0 0 20px ${stat.color}30`,
                  }}
                >
                  <Icon size={28} style={{ color: stat.color }} />
                </div>

                <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                <div>
                  <h3 className="font-semibold text-white mb-1" style={{ fontSize: '1rem' }}>
                    {stat.label}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.8rem' }}>{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specializations row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'MERN Stack Specialist', icon: '🏆' },
            { label: 'TypeScript Developer', icon: '💎' },
            { label: 'Full Stack Developer', icon: '⚡' },
            { label: 'REST API Architect', icon: '🔗' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.6 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.15)',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <span style={{ color: '#94a3b8', fontSize: '0.82rem', fontWeight: 500 }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
