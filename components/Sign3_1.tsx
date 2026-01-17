// app/components/SimpleSignConstructor.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircle from './SimpleCircle';
import { BaseSign } from '@/types/BaseSign';

export default function Sign3_({width,sizeType,time,sizeView,baseData}:BaseSign) {

    const [size,setSize] = useState(900);

    useEffect(()=>{
      if(sizeType==1){
        setSize(700);
      }
      if(sizeType==2){
        setSize(900);
      }
      if(sizeType==3){
        setSize(1200);
      }
    },[sizeType])
  
  // Генерация простого SVG
  const generateCircle = useMemo(() => {
    const color = !time?'white':'yellow';
    const widthRect = 0.75;
    const heightRect = 0.2;
    
    return (
      <svg width={width} height={width}  viewBox={`0 0 ${size} ${size}`}>
        <circle 
            cx={size/2}
            cy={size/2}
            r={size/2}
            fill="black"
        />
        <circle 
            cx={size/2}
            cy={size/2}
            r={size/2-(size*(baseData.outlineBlack||0.005))}
            fill="white"
        />
        <circle 
            cx={size/2}
            cy={size/2}
            r={size/2-(size*(baseData.outlineWhite||0.025))}
            fill={baseData.bgCircle || '#cc0000'}
        />

        <rect 
          x={size*(1-widthRect)/2} 
          y={size*(1-heightRect)/2}
          width={size*widthRect} 
          height={size*heightRect}
          rx="20"
          ry="20"
          fill="#ffffff"
        />
      </svg>
    );
  }, [size]);

  return (
    <>{generateCircle}</>
  );
}