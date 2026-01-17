// app/components/SimpleSignConstructor.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircleBlue from './SimpleCircleBlue';
import { BaseSign } from '@/types/BaseSign';

interface SpeedProps extends BaseSign{
  speed:string
}
export default function Sigт4_6({width,sizeType,time,speed,sizeView,baseData}:SpeedProps) {

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
    
    return (
      <svg width={width} height={width}  viewBox={`0 0 ${size} ${size}`}>
        <SimpleCircleBlue size={size} baseData={baseData}/>
        <text 
            x={size/2} 
            y={size/2+(size/7)}
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize={size/2.3}
            fontWeight="bold"
            fill="white"
        >
            {speed}
        </text>
      </svg>
    );
  }, [size,speed,time]);

  return (
    <>{generateCircle}</>
  );
}