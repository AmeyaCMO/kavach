import { useEffect, useRef } from 'react';

// Dan Abramov's pattern — lets the callback close over the latest state
// without resetting the timer on every render.
export function useInterval(callback, delay) {
  const saved = useRef(callback);

  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return undefined;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
