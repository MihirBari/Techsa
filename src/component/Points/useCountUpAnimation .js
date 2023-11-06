import { useState, useEffect } from 'react';

const useCountUpAnimation = (target, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let startTimestamp;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = (timestamp - startTimestamp) / duration;

      if (progress < 1) {
        const newValue = Math.floor(progress * target);
        setCount(newValue);
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return count;
};

export default useCountUpAnimation;
