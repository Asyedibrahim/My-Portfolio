import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = 'center',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClass}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(124,58,237,0.1)',
            border: '1px solid rgba(124,58,237,0.3)',
            color: '#a855f7',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#a855f7', boxShadow: '0 0 6px #a855f7' }}
          />
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-bold"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2 }}
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
          style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="h-px w-24 rounded-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
      />
    </div>
  );
}
