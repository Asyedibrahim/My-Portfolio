import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

type AnyIcon = IconType | LucideIcon;

const contactLinks: { icon: AnyIcon; label: string; value: string; href: string; color: string }[] = [
  {
    icon: Mail as AnyIcon,
    label: 'Email',
    value: 'syedibrahim@email.com',
    href: 'mailto:syedibrahim@email.com',
    color: '#7c3aed',
  },
  {
    icon: FaLinkedinIn as AnyIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/syed-ibrahim',
    href: 'https://linkedin.com',
    color: '#06b6d4',
  },
  {
    icon: FaGithub as AnyIcon,
    label: 'GitHub',
    value: 'github.com/syed-ibrahim',
    href: 'https://github.com',
    color: '#a855f7',
  },
  {
    icon: MapPin as AnyIcon,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: '#',
    color: '#22d3ee',
  },
];

const inputStyle = {
  width: '100%',
  background: 'rgba(13,13,24,0.8)',
  border: '1px solid rgba(124,58,237,0.2)',
  borderRadius: '0.75rem',
  padding: '0.85rem 1rem',
  color: '#f1f5f9',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  fontFamily: 'inherit',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 60%), #050508',
      }}
    >
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          badge="Contact"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Let's Build Something Great</h3>
              <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.95rem' }}>
                I'm currently open to new opportunities — whether it's a full-time role, freelance
                project, or a collaboration. I'd love to hear from you!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(13,13,24,0.5)',
                      border: `1px solid ${link.color}20`,
                      textDecoration: 'none',
                      cursor: link.href === '#' ? 'default' : 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${link.color}40`;
                      (e.currentTarget as HTMLElement).style.background = `${link.color}08`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${link.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${link.color}20`;
                      (e.currentTarget as HTMLElement).style.background = 'rgba(13,13,24,0.5)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${link.color}12`,
                        border: `1px solid ${link.color}25`,
                      }}
                    >
                      <Icon size={18} style={{ color: link.color }} />
                    </div>
                    <div>
                      <p style={{ color: '#475569', fontSize: '0.7rem', marginBottom: '0.15rem' }}>
                        {link.label}
                      </p>
                      <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 500 }}>
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 gradient-border">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12"
                >
                  <CheckCircle size={56} style={{ color: '#22d3ee' }} />
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p style={{ color: '#64748b', textAlign: 'center' }}>
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Syed Ibrahim"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(124,58,237,0.5)';
                          e.target.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(124,58,237,0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(124,58,237,0.5)';
                          e.target.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(124,58,237,0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Collaboration"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(124,58,237,0.5)';
                        e.target.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(124,58,237,0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(124,58,237,0.5)';
                        e.target.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(124,58,237,0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                    style={{ padding: '0.9rem' }}
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
