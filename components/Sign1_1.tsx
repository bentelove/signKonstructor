// app/components/SimpleSignConstructor.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import { BaseSign } from '@/types/BaseSign';
import SimpleTriangle from './SimpleTriangle';

export default function Sign1_1({width,sizeType,time,sizeView,baseData}:BaseSign) {

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
        <SimpleTriangle size={size} time={time} baseData={baseData}></SimpleTriangle>
      </svg>
    );
  }, [size,time]);

  return (
    <>{generateCircle}</>
  );
}