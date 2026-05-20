import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import ParticleBackground from '../ui/ParticleBackground';
import myResume from '../../assets/SYED IBRAHIM A.pdf';

type AnyIcon = IconType | LucideIcon;

const socials: { icon: AnyIcon; href: string; label: string }[] = [
  { icon: FaGithub as AnyIcon, href: 'https://github.com/Asyedibrahim', label: 'GitHub' },
  { icon: FaLinkedinIn as AnyIcon, href: 'https://www.linkedin.com/in/syed-ibrahim-a-541876261/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Mail as AnyIcon, href: 'mailto:syedibrahim7252@gmail.com', label: 'Email' },
];

const techPills = ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.15) 0%, transparent 60%), #050508',
      }}
    >
      <ParticleBackground />

      {/* Animated grid background */}
      <div className="animated-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      {/* Glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <div className="container-custom relative z-10" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full pulse-glow-animation"
              style={{ background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }}
            />
            <span style={{ color: '#94a3b8', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1
              className="font-bold tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05 }}
            >
              <span style={{ color: '#f8fafc' }}>Syed</span>
              <br />
              <span className="gradient-text glow-text-purple">Ibrahim</span>
            </h1>
          </motion.div>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#64748b' }}
          >
            <AnimatedText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl"
            style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            Building{' '}
            <span style={{ color: '#a855f7' }}>scalable web applications</span> with clean
            architecture, optimized APIs, and stunning user experiences. Passionate about
            transforming complex problems into elegant digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Eye size={16} />
              <span>View Projects</span>
            </motion.a>

            <motion.a
              href={myResume}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.25)',
                color: '#22d3ee',
                textDecoration: 'none',
                fontSize: '0.9rem',
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={16} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  color: '#94a3b8',
                }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 pt-2"
          >
            {techPills.map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 rounded-full text-xs font-mono"
                style={{
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.18)',
                  color: '#7c3aed',
                  letterSpacing: '0.05em',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span style={{ color: '#475569', fontSize: '0.7rem', letterSpacing: '0.15em' }}>
              SCROLL
            </span>
            <ChevronDown size={20} style={{ color: '#7c3aed' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
