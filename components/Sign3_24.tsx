// app/components/SimpleSignConstructor.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircle from './SimpleCircle';
import { BaseSign } from '@/types/BaseSign';

interface SpeedProps extends BaseSign{
  speed:string
}
export default function Sign3_24({width,sizeType,time,speed,sizeView,baseData}:SpeedProps) {

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
    
    return (
      <svg width={width} height={width}  viewBox={`0 0 ${size} ${size}`}>
        <SimpleCircle size={size} time={time} baseData={baseData}/>
        <text 
            x={size/2} 
            y={size/2+(size/7)}
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize={size/2.3}
            fontWeight="bold"
            fill="black"
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