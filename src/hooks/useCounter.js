import { useEffect, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function useCounter(target, { duration = 1800, active = false } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let frame;
    let start;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(easeOutCubic(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, active]);

  return value;
}
