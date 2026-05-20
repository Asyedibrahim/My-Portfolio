import { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'React Specialist',
  'TypeScript',
  'REST Api',
];

export default function AnimatedText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span>
      <span style={{ color: '#a855f7' }}>{displayed}</span>
      <span className="blink-cursor" style={{ color: '#06b6d4', marginLeft: '2px' }}>
        |
      </span>
    </span>
  );
}
