import React, { useState, useEffect, MouseEvent, CSSProperties } from 'react';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, className, ...props }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);

  const addRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const size = Math.max(button.clientWidth, button.clientHeight);
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples((prevRipples) => [...prevRipples, { x, y, size, id }]);
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1));
      }, 600); // Ripple animation duration
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <button
      className={`relative overflow-hidden ${className || ''}`}
      onClick={addRipple}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white bg-opacity-50 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: 'scale(0)',
          } as CSSProperties} // Cast to CSSProperties
        />
      ))}
    </button>
  );
};

export default RippleButton;
