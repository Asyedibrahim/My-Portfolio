import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#050508',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        gap: '2rem',
      }}
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'white',
          boxShadow: '0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(6,182,212,0.3)',
        }}
      >
        SI
      </motion.div>

      {/* Name reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#f8fafc',
            letterSpacing: '-0.01em',
          }}
        >
          Syed Ibrahim
        </h1>
        <p style={{ color: '#475569', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Full Stack MERN Developer
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        style={{
          width: '200px',
          height: '2px',
          background: 'rgba(124,58,237,0.2)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
            borderRadius: '1px',
          }}
        />
      </motion.div>

      {/* Orbiting dots */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              x: [0, Math.cos((i * Math.PI * 2) / 6) * 150],
              y: [0, Math.sin((i * Math.PI * 2) / 6) * 150],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: i % 2 === 0 ? '#7c3aed' : '#06b6d4',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
