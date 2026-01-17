// app/components/SimpleSignConstructor.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircle from './SimpleCircle';
import { BaseSign } from '@/types/BaseSign';

export default function Sign3_2({width,sizeType,time,sizeView,baseData}:BaseSign) {

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
      </svg>
    );
  }, [size,width]);

  return (
    <>{generateCircle}</>
  );
}