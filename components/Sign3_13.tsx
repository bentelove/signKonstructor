// app/components/Sign3_3.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircle from './SimpleCircle';
import { BaseSign } from '@/types/BaseSign';

interface Sign extends BaseSign{
  height: string
}

export default function Sign3_13({ width, sizeType, time, sizeView, baseData,height }: Sign) {
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
    
    return (
    <svg width={width} height={width}  viewBox={`0 0 ${size} ${size}`}>
     <SimpleCircle size={size} time={time} baseData={baseData}/>
  <g transform={`translate(0,${-452.36218/700*size*(700/600)}) scale(${size/700*(700/600)})`}>
    
    <path
       style={{opacity:1, fill:"#000000", fillOpacity:1, stroke:"none"}}
       d="m 241.93555,529.78145 58.06452,58.06451 58.06452,-58.06451 z"
       id="path7699"
    />
    <path
       id="path7701"
       d="m 241.93555,974.94273 58.06452,-58.06451 58.06452,58.06451 z"
       style={{opacity:1, fill:"#000000", fillOpacity:1, stroke:"none"}}
    />
    <g
       style={{fontSize:"224.65725708000002000px", fill:"#000000", fillOpacity:1, stroke:"none"}}
       id="text14295">
      <path
         d="m 251.25005,888.8136 18.87096,0 4.71774,-61.33064 25.16129,50.32257 25.16129,-50.32257 4.71774,61.33064 18.87097,0 -7.8629,-88.06451 -18.87097,0 -22.01613,44.03225 -22.01612,-44.03225 -18.87097,0 z"
         style={{fill:"#000000"}}
         id="path14454"
      />
    </g>
  </g>
    <text 
        x={size*0.5} 
        y={size*0.5}
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize={size/3}
        fontWeight="bold"
        letterSpacing="-10"
        fill='black'
    >
        {height}
    </text>
</svg>
    );
  }, [size, time, height]);

  return generateSign;
}