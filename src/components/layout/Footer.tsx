import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  // Heart, 
  Mail 
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

type AnyIcon = IconType | LucideIcon;

const socials: { icon: AnyIcon; href: string; label: string }[] = [
  { icon: FaGithub as AnyIcon, href: 'https://github.com/Asyedibrahim', label: 'GitHub' },
  { icon: FaLinkedinIn as AnyIcon, href: 'https://www.linkedin.com/in/syed-ibrahim-a-541876261/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: Mail as AnyIcon, href: 'mailto:syedibrahim7252@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #050508 0%, #07070f 100%)',
        borderTop: '1px solid rgba(124,58,237,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)',
        }}
      />

      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-2">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                SI
              </div>
              <span className="font-semibold text-white">Syed Ibrahim</span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Full Stack MERN Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(124,58,237,0.1)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  color: '#94a3b8',
                }}
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1">
            {/* <p style={{ color: '#475569', fontSize: '0.8rem' }}>
              Crafted with{' '}
              <Heart
                size={12}
                style={{ display: 'inline', color: '#a855f7', fill: '#a855f7' }}
              />{' '}
              by Syed Ibrahim
            </p> */}
            <p style={{ color: '#334155', fontSize: '0.75rem' }}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          boxShadow: '0 0 20px rgba(124,58,237,0.4)',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
