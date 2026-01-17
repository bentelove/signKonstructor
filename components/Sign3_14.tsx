// app/components/Sign3_14.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircle from './SimpleCircle';
import { BaseSign } from '@/types/BaseSign';

interface Sign extends BaseSign {
  widthLimit: string; // Значение ограничения ширины (например, "3,5")
}

export default function Sign3_14({ 
  width, 
  sizeType, 
  time, 
  sizeView, 
  baseData, 
  widthLimit 
}: Sign) {
  const [size, setSize] = useState(900);

  useEffect(() => {
    switch(sizeType) {
      case 1:
        setSize(700);
        break;
      case 2:
        setSize(900);
        break;
      case 3:
        setSize(1200);
        break;
      default:
        setSize(900);
    }
  }, [sizeType]);

  // Основная генерация знака
  const generateSign = useMemo(() => {
    const scaleFactor = size / 700 * (700 / 600);
    const translateY = -452.36218 / 700 * size * (700 / 600);
    
    return (
      <svg width={width} height={width} viewBox={`0 0 ${size} ${size}`}>
        {/* Базовый круг знака */}
        <SimpleCircle size={size} time={time} baseData={baseData} />
        
        {/* Стрелки и текст ограничения ширины */}
        <g transform={`translate(0,${translateY}) scale(${scaleFactor})`}>
          {/* Левая стрелка */}
          <path
            style={{ opacity: 1, fill: "#000000", fillOpacity: 1, stroke: "none" }}
            d="M 77.419456,810.42661 135.48397,752.36209 77.419456,694.29758 z"
            id="path7699"
          />
          
          {/* Правая стрелка */}
          <path
            id="path7701"
            d="m 522.58074,810.42661 -58.06451,-58.06452 58.06451,-58.06451 z"
            style={{ opacity: 1, fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
          
          {/* Цифра 5 */}
          <g
            style={{ fontSize: "224.65725708000002000px", fill: "#000000", fillOpacity: 1, stroke: "none" }}
            id="text14295"
          >
            <path
              d="m 251.25005,927.52332 18.87096,0 4.71774,-61.33065 25.16129,50.32258 25.16129,-50.32258 4.71774,61.33065 18.87097,0 -7.8629,-88.06452 -18.87097,0 -22.01613,44.03226 -22.01612,-44.03226 -18.87097,0 z"
              style={{ fill: "#000000" }}
              id="path14679"
            />
          </g>
        </g>
        
        {/* Текст ограничения ширины */}
        <text 
          x={size * 0.5} 
          y={size * 0.5}
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize={size / 3}
          fontWeight="bold"
          letterSpacing={-10}
          fill="black"
        >
          {widthLimit}
        </text>
      </svg>
    );
  }, [size, time, widthLimit, width, baseData]);

  return generateSign;
}