import React from 'react';
import './BrandLogo.css';

interface BrandLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'nav' | 'hero';
}

const LOGO_TEXT = 'DREW CHRISTNER';

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'nav', ...rest }) => {
  const chars = LOGO_TEXT.split('');
  const mid = (chars.length - 1) / 2;
  // Slightly stronger curve on the hero splash
  const curve = size === 'hero' ? 10 : 5;
  const tilt = size === 'hero' ? 3.5 : 2;

  return (
    <span
      className={`brand-logo brand-logo--${size} ${className}`.trim()}
      aria-label="Drew Christner"
      {...rest}
    >
      {chars.map((char, index) => {
        const t = mid === 0 ? 0 : (index - mid) / mid;
        const translateY = t * t * curve;
        const rotate = t * tilt;

        return (
          <span
            key={`${char}-${index}`}
            className={`brand-logo__char${char === ' ' ? ' brand-logo__char--space' : ''}`}
            style={{
              transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
            }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
};

export default BrandLogo;
