import React from 'react';

interface DotsPatternProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
}

const DotsPattern: React.FC<DotsPatternProps> = ({
  className = "",
  dotColor = "#e5e7eb",
  dotSize = 2,
  spacing = 30,
  opacity = 0.4
}) => {
  const patternId = `dots-pattern-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={dotSize}
              fill={dotColor}
              opacity={opacity}
            />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
};

export default DotsPattern;