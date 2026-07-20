import React from 'react';
import './BrandLogo.css';

interface BrandLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'nav' | 'hero';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'nav', ...rest }) => {
  return (
    <span
      className={`brand-logo brand-logo--${size} ${className}`.trim()}
      aria-label="Drew Christner"
      {...rest}
    >
      Drew Christner
    </span>
  );
};

export default BrandLogo;
