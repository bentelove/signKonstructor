'use client'

import Car from "@/components/Service/Car";
import Grid from "@/components/Service/Grid";
import House from "@/components/Service/House";
import Lift2 from "@/components/Service/Lift2";
import Lift4 from "@/components/Service/Lift4";
import LiftNMax from "@/components/Service/LiftNMax";
import LiftNMini from "@/components/Service/LiftNMini";
import { useEffect, useState } from "react";

export default function Service() {
    const [car,setCar] = useState('octavia');
    const [size,setSize] = useState({height:457,width:177});
    const [sizeLift,setSizeLift] = useState(80);
    const [lift4,setLift4] = useState(true);

    useEffect(()=>{
        if(car=='octavia'){
            setSize({height:457,width:177});
        }
        if(car=='x5'){
            setSize({height:492,width:200});
        }
        if(car=='tundra'){
            setSize({height:629,width:204});
        }
        if(car=='sandero'){
            setSize({height:402,width:175});
        }
    },[car]);
  return (
    <>
        <h1 className="p-4 text-3xl">Автомобили</h1>
        <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setCar('x5')}}>BMW X5 G05</button>
        <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setCar('octavia')}}>Skoda Octavia A5</button>
        <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setCar('tundra')}}>Toyota Tundra </button>
        <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setCar('sandero')}}>Renault Sandero </button>
        <div className="flex">
            <div>
                <h1 className="p-4 text-3xl">Подъемник</h1>
                <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setLift4(true)}}>4 стоечный</button>
                <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setLift4(false)}}>Ножничный</button>
            </div>
            {lift4&&<div>
                    <h1 className="p-4 text-3xl">Размер подъемника</h1>
                    <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setSizeLift(80)}}>80</button>
                    <button className={"p-4 hover:bg-gray-100 cursor-pointer"} onClick={()=>{setSizeLift(103)}}>103</button>
                </div>
            }
        </div>
        <svg  viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
            <Grid></Grid>
            <House x={400} y={100}></House>
            {lift4&&<Lift4 size={sizeLift} rotate={180} x={400+320} y={100+250}></Lift4>}
            {!lift4&&<LiftNMax rotate={180} x={400+300} y={100+250}></LiftNMax>}


            <Car rotate={90} width={size.width} height={size.height} x={lift4?400+320+50:400+300} y={100+250}></Car>
            <LiftNMini rotate={0} height={210} x={600+400+300+20} y={100+250}>
                <Car rotate={90} width={size.width} height={size.height} x={100} y={95}></Car>
            </LiftNMini>
            <Lift2 rotate={270} rotate2={50} l={100} x={600+400+300} y={100+170+500}>
                <Car width={size.width} height={size.height} x={170} y={20}></Car>
            </Lift2>

            
            <Lift2 rotate={210} rotate2={50} l={100} x={430} y={1100+250}>
                <Car width={size.width} height={size.height} x={170} y={20}></Car>
            </Lift2>
            <Lift2 rotate={180} rotate2={50} l={100} x={850} y={1100+300}>
                <Car width={size.width} height={size.height} x={170} y={20}></Car>
            </Lift2>

            <LiftNMini rotate={270} height={210} x={600+400+430} y={1400}>
                <Car rotate={90} width={size.width} height={size.height} x={100} y={95}></Car>
            </LiftNMini>
        </svg>
    </>
  );
}