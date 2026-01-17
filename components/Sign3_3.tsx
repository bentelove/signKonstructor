// app/components/SimpleSignConstructor.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import SimpleCircle from './SimpleCircle';
import { BaseSign } from '@/types/BaseSign';

export default function Sign3_3({width,sizeType,time,sizeView,baseData}:BaseSign) {

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
        <path fill="#000000" transform={`scale(${1.12903226/700*size})`} d="m 460 380 a 20 20 0 0 0 20 -20 v -80 a 20 20 0 0 0 -20 -20 l -33.23 -97.98 a 17.71 17.71 0 0 0 -16.77 -12.02 h -200 a 17.71 17.71 0 0 0 -16.77 12.02 l -33.23 97.98 a 20 20 0 0 0 -20 20 v 80 a 20 20 0 0 0 20 20 z m -280 -120 l 28.48 -83.99 a 8.86 8.86 0 0 1 8.39 -6.01 h 186.26 a 8.86 8.86 0 0 1 8.39 6.01 l 28.48 83.99 z m 10 80 a 30 30 0 0 1 -30 -30 a 30 30 0 0 1 30 -30 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 z m 240 0 a 30 30 0 0 1 -30 -30 a 30 30 0 0 1 30 -30 a 30 30 0 0 1 30 30 a 30 30 0 0 1 -30 30 z"/>
        <path fill="#000000" transform={`scale(${1.12903226/700*size})`}  d="m 160 390 v 40 a 30 30 0 0 0 30 30 a 30 30 0 0 0 30 -30 v -40 z"/>
        <path fill="#000000" transform={`scale(${1.12903226/700*size})`}  d="m 400 390 v 40 a 30 30 0 0 0 30 30 a 30 30 0 0 0 30 -30 v -40 z"/>
      </svg>
    );
  }, [size,width]);

  return (
    <>{generateCircle}</>
  );
}