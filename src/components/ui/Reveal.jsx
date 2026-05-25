import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

export function Reveal({ children, delay = 0, as: Tag = 'div', className, style }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  const composedStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
    ...style,
  };

  return (
    <Tag ref={ref} className={className} style={composedStyle}>
      {children}
    </Tag>
  );
}
