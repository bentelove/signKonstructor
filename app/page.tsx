'use client'
import Sign3_1 from "@/components/Sign3_1";
import Sign3_13 from "@/components/Sign3_13";
import Sign3_14 from "@/components/Sign3_14";
import Sign3_2 from "@/components/Sign3_2";
import Sign3_24 from "@/components/Sign3_24";
import Sign3_3 from "@/components/Sign3_3";
import Sign4_6 from "@/components/Sign4_6";
import Sign5_15_1, { Line2, LineType } from "@/components/Sign5_15_1";
import Sign5_15_7, { Lines } from "@/components/Sign5_15_7";
import Sign5_15_8 from "@/components/Sign5_15_8";
import Sign5_23 from "@/components/Sign5_23";
import Sign5_25 from "@/components/Sign5_25";
import Sign6_12, { ColorSign } from "@/components/Sign6_12";
import Sign7_1 from "@/components/Sign7_1";
import Sign7_2 from "@/components/Sign7_2";
import Sign7_3 from "@/components/Sign7_3";
import { BaseData, BaseSign } from "@/types/BaseSign";
import Image from "next/image";
import { use, useDebugValue, useEffect, useState } from "react";

export default function Home() {

  const BASE_DATA:BaseData = {
    bgCircle:'#cc0000',
    bgBlue:"#0B61A4",
    outlineBlack:0.005,
    outlineWhite:0.025,
    borderCircle:0.1,
    debug:true,
    seven:{
      defaultWidth:700,
      white:{
        top:0.2,
        width:0.8
      },
      text:{
        top: 1.32,
        dirRectTop: -0.105,
        dirRectHeight: 0.07,
        dirRectWidth: 0.1,
        dirTriHeight:0.14,
        dirTriWidth: 0.1,
        dirX:0.1
      }
    }
  }

  const [baseData,setBaseData] = useState(BASE_DATA);

  const [width,setWidth] = useState(300);
  const [sizeType,setSizeType] = useState(1);
  const [time,setTime] = useState(false);
  const [sizeView,setSizeView] = useState(true);
  const [speed,setSpeed] = useState('90');
  const [city,setCity] = useState('москва');
  const [debug,setDebug] = useState(false);

  useEffect(()=>{
    setBaseData({...baseData,debug:debug})
  },[debug])

    const BASE_CONSTRUCTOR:Lines = {
        lineRear:[
            {type:'normal',gap:{type:'stroke'}},
            {type:'normal',gap:{type:'none'}},
        ],
        gap:{type:'fill'},
        lineFront:[
            {type:'test',gap:{type:'fill'}},
            {type:'normal',gap:{type:'fill'}},
            {type:'normal',gap:{type:'none'}}
        ]
    }
    const BASE_CONSTRUCTOR2 = [
      {speed:"90"},
      {speed:"80"},
      {speed:""},
      {speed:"40"}
    ];
    const BASE_CONSTRUCTOR3:Line2[] = [
      {type:LineType.LEFT},
      {type:LineType.LEFT},
      {type:LineType.FRONT},
      {type:LineType.RIGHT_FRONT},
      {type:LineType.RIGHT},
    ];
    const BASE_CITIES = [
      {name:"Череповец",distance:90},
      {name:"Вологда",distance:120},
      {name:"Сокол",distance:160,transcription:"Sokol"}
    ]
    const [gapA,setGapA] = useState(0.4);
    const [gapB,setGapB] = useState(0.6);
    const [fontSize,setFontSize] = useState(100);

    const [lines,setLines] = useState(BASE_CONSTRUCTOR);
    const [lines2,setLines2] = useState(BASE_CONSTRUCTOR2);
    const [lines3,setLines3] = useState<Line2[]>(BASE_CONSTRUCTOR3);
    const [distance,setDistance] = useState<string>('');
    const [type7sign,setType7Sign] = useState<string>('normal');

    useEffect(()=>{
      setSpeed('100');
    },[])
    useEffect(()=>{
      if(gapA<0.3){
        setGapA(0.3);
      }
      if(gapA>1){
        setGapA(1)
      }
    },[gapA])
    useEffect(()=>{
      if(gapB<0.4){
        setGapB(0.4);
      }
      if(gapB>0.8){
        setGapB(0.8)
      }
    },[gapB])

  return (
    <div className="">
      <button className={`p-4 ${sizeType === 1 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setSizeType(1)}}>1 размер</button>
      <button className={`p-4 ${sizeType === 2 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setSizeType(2)}}>2 размер</button>
      <button className={`p-4 ${sizeType === 3 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setSizeType(3)}}>3 размер</button>
      <br/>
      <button className={`p-4 ${!time ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setTime(false)}}>Постоянный</button>
      <button className={`p-4 ${time ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setTime(true)}}>Временный</button>
      <br/>
      <button className={`p-4 ${!debug ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setDebug(false)}}>Debug OFF</button>
      <button className={`p-4 ${debug ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setDebug(true)}}>Debug ON</button>
      <br/>
      <input className="bg-gray-100 border-black" onChange={(e)=>{setDistance(e.target.value)}} value={distance || ''}/><br/>
      <button className={`p-4 ${type7sign === 'left' ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setType7Sign('left')}}>Слева</button>
      <button className={`p-4 ${type7sign === 'normal' ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setType7Sign('normal')}}>Спереди</button>
      <button className={`p-4 ${type7sign === 'right' ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setType7Sign('right')}}>Справа</button>
      <br/><br/>
      <input type='number' step='0.1' className="bg-gray-100 border-black" onChange={(e)=>{setGapA(Number(e.target.value))}} value={gapA || 0}/><br/>
      <input type='number' step='0.1' className="bg-gray-100 border-black" onChange={(e)=>{setGapB(Number(e.target.value))}} value={gapB || 0}/><br/>
      <button className={`p-4 ${fontSize === 100 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setFontSize(100)}}>100 мм</button>
      <button className={`p-4 ${fontSize === 150 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setFontSize(150)}}>150 мм</button>
      <button className={`p-4 ${fontSize === 200 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setFontSize(200)}}>200 мм</button>
      <button className={`p-4 ${fontSize === 300 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setFontSize(300)}}>300 мм</button>
      <button className={`p-4 ${fontSize === 400 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setFontSize(400)}}>400 мм</button>
      <button className={`p-4 ${fontSize === 500 ? 'bg-blue-600 text-white' : ''}`} onClick={()=>{setFontSize(500)}}>500 мм</button>
      <Sign6_12 color={ColorSign.BLUE} gapA={gapA*fontSize} gapB={gapB*fontSize} fontSize={fontSize} cities={BASE_CITIES} sizeView={false} width={width*2} sizeType={sizeType} baseData={baseData}></Sign6_12>
      <Sign6_12 color={ColorSign.WHITE} gapA={gapA*fontSize} gapB={gapB*fontSize} fontSize={fontSize} cities={BASE_CITIES} sizeView={false} width={width*2} sizeType={sizeType} baseData={baseData}></Sign6_12>
      <Sign7_3 sizeView={false} distance={distance} type={type7sign} width={width} sizeType={sizeType} baseData={baseData}></Sign7_3>
      <Sign7_2 sizeView={false} distance={distance} type={type7sign} width={width} sizeType={sizeType} baseData={baseData}></Sign7_2>
      <Sign7_1 sizeView={false} distance={distance} type={type7sign} width={width} sizeType={sizeType} baseData={baseData}></Sign7_1>
      <Sign5_23 sizeView={false} signType="5.23.1" city={city} width={width*2} sizeType={sizeType} baseData={baseData}></Sign5_23>
      <Sign5_23 sizeView={false} signType="5.23.2" city={city} width={width*2} sizeType={sizeType} baseData={baseData}></Sign5_23>
      <Sign5_25 sizeView={false} signType="5.25" city={city} width={width*2} sizeType={sizeType} baseData={baseData}></Sign5_25>
      <Sign5_25 sizeView={false} signType="5.26" city={city} width={width*2} sizeType={sizeType} baseData={baseData}></Sign5_25>
      <Sign5_15_1 widthPicture={width*2} lines={lines3} sizeType={sizeType} baseData={baseData}></Sign5_15_1>
      <Sign5_15_8 widthPicture={width*2} lines={lines2} sizeType={sizeType} baseData={baseData}></Sign5_15_8>
      <Sign5_15_7 widthPicture={width*2} lines={lines} sizeType={sizeType} baseData={baseData}></Sign5_15_7>
      <input className="bg-gray-100 border border-black p-2 m-4" onChange={(e)=>{setSpeed(e.target.value)}} value={speed}/>
      <Sign3_14 width={width} sizeType={sizeType} sizeView={sizeView} baseData={baseData} widthLimit={speed}></Sign3_14>
      <Sign3_13 width={width} sizeType={sizeType} sizeView={sizeView} baseData={baseData} height={speed}></Sign3_13>
      <Sign3_24 width={width} sizeType={sizeType} time={time} speed={speed} sizeView={sizeView} baseData={baseData}></Sign3_24>
      <Sign4_6 width={width} sizeType={sizeType} time={time} speed={speed} sizeView={sizeView} baseData={baseData}></Sign4_6>
      <Sign3_1  width={width} sizeType={sizeType} sizeView={sizeView} baseData={baseData}></Sign3_1>
      <Sign3_2  width={width} sizeType={sizeType} sizeView={sizeView} baseData={baseData}></Sign3_2>
      <Sign3_3  width={width} sizeType={sizeType} sizeView={sizeView} baseData={baseData} ></Sign3_3>
    </div>
  );
}