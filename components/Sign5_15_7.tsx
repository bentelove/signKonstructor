import { BaseData } from "@/types/BaseSign"
import { useEffect, useMemo, useState } from "react";
import Sign3_2 from "./Sign3_2";
import Sign3_3 from "./Sign3_3";

interface Props{
    baseData:BaseData,
    lines:Lines,
    sizeType: number,
    widthPicture:number
}

export interface Lines{
    lineRear: LineRear[]
    gap:Gap
    lineFront: LineFront[] //Полосы попутного движения
}
interface LineRear{
    type: string
    gap: Gap 
}
interface Gap{
    type: string 
}
interface LineFront{
    type: string 
    gap: Gap 
}

export default function Sign5_15_7({baseData,lines,sizeType,widthPicture}:Props){

    const [length,setLength ]= useState(lines.lineFront.length+lines.lineRear.length);
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

    const generateRearLine = (line:LineRear,width:number,height:number)=>{
        return (
            <>
                {line.gap.type=='stroke'&&
                    <line
                        x1={widthLine} y1={0}
                        x2={widthLine} y2={heightLine}
                        stroke="white"
                        strokeWidth={border*1.5}
                        strokeDasharray={`${border*3.5},${border*1.7}`}
                    />
                }
                {line.gap.type=='fill'&&
                    <line
                        x1={widthLine} y1={0}
                        x2={widthLine} y2={heightLine}
                        stroke="white"
                        strokeWidth={border*1.5}
                    />
                }
                <>
                    <line
                        x1={width/2} y1={0}
                        x2={width/2} y2={height*0.7}
                        stroke="white"
                        strokeWidth={width*0.2}
                    />
                    <polygon 
                        points={`${width/2},${height*0.9} ${width/4},${height*0.6} ${width/4*3},${height*0.6}`}
                        fill="white" 
                    />
                </>
            </>
        )
    }
    const generateFrontLine = (line:LineFront,width:number,height:number)=>{
        return (
            <>
                {line.gap.type=='fill'&&
                    <line
                        x1={widthLine} y1={0}
                        x2={widthLine} y2={heightLine}
                        stroke="white"
                        strokeWidth={border*1.5}
                    />
                }
                {line.gap.type=='stroke'&&
                    <line
                        x1={widthLine} y1={0}
                        x2={widthLine} y2={heightLine}
                        stroke="white"
                        strokeWidth={border*1.5}
                        strokeDasharray={`${border*3.5},${border*1.7}`}
                        />
                }
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
                    {line.type=='test'&&
                    <g transform={`translate(${width/4},${height/2})`}>
                          <Sign3_3  width={width/2} sizeType={1} sizeView={false} baseData={baseData}></Sign3_3>
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
                {lines.lineRear.map((line:LineRear,i:number)=>{
                    return <g key={i} transform={`translate(${widthLine*i},0)`}>{generateRearLine(line,widthLine,heightLine)}</g>;
                })}
                {lines.gap.type=='fill'&&
                <line
                    x1={widthLine*lines.lineRear.length} y1={0}
                    x2={widthLine*lines.lineRear.length} y2={heightLine}
                    stroke="white"
                    strokeWidth={border*1.5}
                    />
                }
                {lines.gap.type=='stroke'&&
                <line
                    x1={widthLine*lines.lineRear.length} y1={0}
                    x2={widthLine*lines.lineRear.length} y2={heightLine}
                    stroke="white"
                    strokeWidth={border*1.5}
                    strokeDasharray={`${border*3.5},${border*1.7}`}
                    />
                }
                {lines.lineFront.map((line:LineRear,i:number)=>{
                    return <g key={i} transform={`translate(${widthLine*(i+lines.lineRear.length)})`}>{generateFrontLine(line,widthLine,heightLine)}</g>;
                })}
            </g>
        </svg>)
            
    }
