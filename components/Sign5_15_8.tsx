import { BaseData } from "@/types/BaseSign"
import { useEffect, useMemo, useState } from "react";
import Sign3_2 from "./Sign3_2";
import Sign3_3 from "./Sign3_3";
import Sign3_24 from "./Sign3_24";

interface Props{
    baseData:BaseData,
    lines:Line[],
    sizeType: number,
    widthPicture:number
}

export interface Line{
    speed:string | null
}

export default function Sign5_15_7({baseData,lines,sizeType,widthPicture}:Props){

    const [length,setLength ]= useState(lines.length);
    const [width,setWidth] = useState(465*length);
    const [height,setHeight] = useState(700);
    useEffect(()=>{
        if(sizeType===2){
            if(length==3){
                setWidth(1400);
            }
            else{
                setWidth(465*length);
            }
            setHeight(700)
        }
        if(sizeType===3){
            setWidth(length*600)
            setHeight(900)
        }
    },[sizeType])
    const border = height*baseData.outlineWhite;
    const borderWhite = height*baseData.outlineBlack;
    const widthLine = (width-(2*border))/length;
    const heightLine = (height-(2*border));

    const generateFrontLine = (line:Line,width:number,height:number)=>{
        return (
            <>
                <>
                    <line
                        x1={width/2} y1={height*0.3}
                        x2={width/2} y2={height}
                        stroke="white"
                        strokeWidth={width*0.2}
                    />
                    <polygon 
                        points={`${width/2},${height*0.1} ${width/4},${height*0.4} ${width/4*3},${height*0.4}`}
                        fill="white" 
                    />
                    {line.speed&&
                    <g transform={`translate(${width/4},${height/2})`}>
                          <Sign3_24 width={width/2} sizeType={sizeType} time={false} speed={line.speed} sizeView={false} baseData={baseData}></Sign3_24>
                    </g>
                    }
                </>
            </>
        )
    }
    return(<svg width={widthPicture} height={widthPicture/(width/height)}  viewBox={`0 0 ${width} ${height}`}>
            <rect 
                x={0} 
                y={0}
                width={width} 
                height={height}
                rx="20"
                ry="20"
                fill="#000000"
            />
            <rect 
                x={borderWhite} 
                y={borderWhite}
                width={width-2*borderWhite} 
                height={height-2*borderWhite}
                rx="20"
                ry="20"
                fill="#ffffff"
            />
            <rect 
                x={border}
                y={border}
                width={width-2*border} 
                height={height-2*border}
                rx="20"
                ry="20"
                fill={baseData.bgBlue}
            />
            <g transform={`translate(${border},${border})`}>
                {lines.map((line:Line,i:number)=>{
                    return <g key={i} transform={`translate(${widthLine*i})`}>{generateFrontLine(line,widthLine,heightLine)}</g>;
                })}
            </g>
        </svg>)
            
    }
