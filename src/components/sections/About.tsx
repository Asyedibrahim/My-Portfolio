import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Code2, Globe, Layers, Rocket, MapPin, Download } from 'lucide-react';
import me from '../../assets/me.png';
import myResume from '../../assets/SYED IBRAHIM A.pdf';

const highlights = [
  {
    icon: Code2,
    title: 'MERN Specialist',
    description: 'Deep expertise in MongoDB, Express, React, and Node.js ecosystem',
    color: '#7c3aed',
  },
  {
    icon: Layers,
    title: 'ERP & CRM Systems',
    description: 'Built enterprise-grade platforms handling complex business workflows',
    color: '#06b6d4',
  },
  {
    icon: Globe,
    title: 'E-Commerce',
    description: 'Delivered scalable, production-ready applications for real clients',
    color: '#a855f7',
  },
  {
    icon: Rocket,
    title: 'Full Deployment',
    description: 'End-to-end: from architecture to VPS deployment and CI/CD',
    color: '#22d3ee',
  },
];

function ProfilePhoto() {
  return (
    <div className="relative flex items-center justify-center" style={{ isolation: 'isolate' }}>

      {/* Outer glow ring */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #a855f7, #7c3aed)',
          opacity: 0.15,
          filter: 'blur(30px)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />

      {/* Rotating gradient border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '268px',
          height: '268px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, transparent, #7c3aed)',
          padding: '2px',
        }}
      />

      {/* Static background ring */}
      <div
        style={{
          position: 'relative',
          width: '262px',
          height: '262px',
          borderRadius: '50%',
          background: '#050508',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        {/* Photo container */}
        <div
          style={{
            width: '248px',
            height: '248px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={me}
            alt="Syed Ibrahim – Full Stack Developer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: 'linear-gradient(135deg, #0d0d18, #12122a)',
            }}
          />

          {/* Subtle overlay shimmer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Floating badge — available */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '-10px',
          background: 'rgba(10,10,20,0.9)',
          border: '1px solid rgba(34,211,238,0.35)',
          borderRadius: '999px',
          padding: '0.4rem 0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backdropFilter: 'blur(12px)',
          zIndex: 2,
          boxShadow: '0 0 20px rgba(34,211,238,0.15)',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#22d3ee',
            boxShadow: '0 0 8px #22d3ee',
            display: 'inline-block',
          }}
        />
        <span style={{ color: '#22d3ee', fontSize: '0.72rem', fontWeight: 600 }}>
          Available
        </span>
      </motion.div>

      {/* Floating badge — location */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: '10px',
          left: '-16px',
          background: 'rgba(10,10,20,0.9)',
          border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: '999px',
          padding: '0.4rem 0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backdropFilter: 'blur(12px)',
          zIndex: 2,
          boxShadow: '0 0 20px rgba(124,58,237,0.12)',
        }}
      >
        <MapPin size={11} style={{ color: '#a855f7' }} />
        <span style={{ color: '#94a3b8', fontSize: '0.72rem', fontWeight: 500 }}>
          Tamil Nadu, India
        </span>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(6,182,212,0.05) 0%, transparent 60%), #050508',
      }}
    >
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          badge="Who I Am"
          subtitle="Passionate full-stack developer crafting digital experiences that make a difference."
        />

        {/* ── Row 1: Photo + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-14">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            className="flex justify-center"
          >
            <ProfilePhoto />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div
              className="glass rounded-2xl p-8 glass-hover gradient-border"
              style={{ position: 'relative' }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(124,58,237,0.15)',
                      border: '1px solid rgba(124,58,237,0.3)',
                      color: '#a855f7',
                    }}
                  >
                    1 Year 4 Months Experience
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(6,182,212,0.1)',
                      border: '1px solid rgba(6,182,212,0.25)',
                      color: '#22d3ee',
                    }}
                  >
                    Full-Time + Freelance
                  </div>
                </div>

                <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  Hi! I'm <span style={{ color: '#f8fafc', fontWeight: 600 }}>Syed Ibrahim</span>, a
                  Full Stack MERN Developer based in Tamil Nadu, India. I specialize in building
                  robust, scalable web applications — from ERP systems and CRM platforms to
                  e-commerce solutions and consultancy tools.
                </p>

                <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  With hands-on experience at{' '}
                  <span style={{ color: '#a855f7', fontWeight: 500 }}>ILIFE Technologies</span> and{' '}
                  <span style={{ color: '#22d3ee', fontWeight: 500 }}>Digiplus Agency</span>, plus
                  diverse freelance projects, I've honed a strong foundation in{' '}
                  <span style={{ color: '#f8fafc' }}>
                    scalable architecture, responsive UI design, RESTful API optimization, and cloud
                    deployment
                  </span>
                  .
                </p>

                <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  I thrive on turning complex requirements into clean, maintainable code and
                  delivering products that users love.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '1.4+', label: 'Years Exp.' },
                { value: '10+', label: 'Projects' },
                { value: '100%', label: 'Dedication' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass rounded-xl p-4 text-center gradient-border"
                >
                  <div
                    className="gradient-text font-bold"
                    style={{ fontSize: '1.8rem', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download resume CTA */}
            <motion.a
              href={myResume}
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center justify-center gap-2 w-full"
              style={{ padding: '0.85rem' }}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* ── Row 2: Highlights ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
                style={{ cursor: 'default' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: '#f1f5f9', fontSize: '0.95rem' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
