import { BaseData } from "@/types/BaseSign"
import { useEffect, useMemo, useState } from "react";
import Sign3_24 from "./Sign3_24";
import Sign3_3 from "./Sign3_3";

interface Props{
    baseData:BaseData,
    lines:Line2[],
    sizeType: number,
    widthPicture:number
}

export interface Line2{
    type: LineType
    speed?:string
    test?:boolean
}
export enum LineType{
    LEFT,
    RIGHT,
    FRONT,
    LEFT_FRONT,
    RIGHT_FRONT
}

export default function Sign5_15_1({baseData,lines,sizeType,widthPicture}:Props){

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

    const generateFrontLine = (gap:boolean,line:Line2,width:number,height:number)=>{
        function moveLineType(type:LineType){
            if(type===LineType.LEFT_FRONT){return 0.4}
            if(type===LineType.RIGHT_FRONT){return 0.1}
            if(type===LineType.LEFT){return 0.4}
            if(type===LineType.RIGHT){return 0.1}
            return 0.25; 
        }
        return (
            <>
                <g transform={`scale(${(heightLine+2*border)/700})`}>
                    {(line.type===LineType.LEFT)&&
                        <path fill="white" d="M -86.488 80.897 
                            L -86.488 116.722 
                            L -186.799 57.611 
                            L -87.086 1.485 
                            L -86.488 36.713 
                            C -86.488 36.713 -1.702 30.742 -1.702 102.989 
                            C -1.702 175.236 -2.419 334.001 -2.419 334.001 
                            L -46.006 334.599 
                            L -46.006 104.124 
                            C -46.006 104.124 -46.483 79.408 -77.366 80.063 
                            C -80.152 80.122 -83.185 80.388 -86.488 80.897 Z"
                        transform={`scale(1.75) translate(205,46)`}
                        />
                    }
                    {(line.type===LineType.LEFT_FRONT)&&
                        <path fill="white" d="M 169.552 385.801 
                        L 168.332 118.137 
                        L 206.744 118.137 
                        L 145.773 18.754 
                        L 87.85 118.137 
                        L 123.823 118.137 
                        L 123.823 184.596 
                        C 123.823 184.596 114.903 175.834 85.027 179.492 
                        C 84.81 161.907 84.844 142.981 84.844 142.981 
                        L -15.557 201.498 
                        L 84.443 259.815 
                        L 84.644 223.142 
                        C 84.644 223.142 123.922 219.735 123.922 248.993 
                        C 123.922 278.251 124.139 386.349 124.139 386.349 
                        L 169.552 385.801 Z" 
                        transform={`scale(1.75) translate(30,0)`}/>
                    }
                    {(line.type===LineType.RIGHT)&&
                        <path fill="white" d="M 86.488 80.897 
                        L 86.488 116.722 
                        L 186.799 57.611 
                        L 87.086 1.485 
                        L 86.488 36.713 
                        C 86.488 36.713 1.702 30.742 1.702 102.989 
                        C 1.702 175.236 2.419 334.001 2.419 334.001 
                        L 46.006 334.599 
                        L 46.006 104.124 
                        C 46.006 104.124 46.483 79.408 77.366 80.063 
                        C 80.152 80.122 83.185 80.388 86.488 80.897 Z"
                            transform={`scale(1.75) translate(50,46)`}
                        />
                    }
                    {(line.type===LineType.RIGHT_FRONT)&&
                        <path fill="white" d="M -169.552 385.801 
                    L -168.332 118.137 
                    L -206.744 118.137 
                    L -145.773 18.754 
                    L -87.85 118.137 
                    L -123.823 118.137 
                    L -123.823 184.596 
                    C -123.823 184.596 -114.903 175.834 -85.027 179.492 
                    C -84.81 161.907 -84.844 142.981 -84.844 142.981 
                    L 15.557 201.498 
                    L -84.443 259.815 
                    L -84.644 223.142 
                    C -84.644 223.142 -123.922 219.735 -123.922 248.993 
                    C -123.922 278.251 -124.139 386.349 -124.139 386.349 
                    L -169.552 385.801 Z" 
                        transform={`scale(1.75) translate(225,0)`}/>
                    }
                    {(line.type===LineType.FRONT)&&
                        <path fill="white" d="M 169.552 385.801 
                        L 168.332 118.137 
                        L 206.744 118.137 
                        L 145.773 18.754 
                        L 87.85 118.137 
                        L 123.823 118.137 
                        C 123.922 278.251 124.139 386.349 124.139 386.349 
                        L 169.552 385.801 Z" 
                        transform={`scale(1.75) translate(-15,0)`}/>
                    }
                </g>

                {line.speed&&
                <g transform={`translate(${width*moveLineType(line.type)},${height*0.6})`}>
                        <Sign3_24 width={width/2} sizeType={sizeType} time={false} speed={line.speed} sizeView={false} baseData={baseData}></Sign3_24>
                </g>
                }
                {line.test&&
                <g transform={`translate(${width*moveLineType(line.type)},${height*0.6})`}>
                        <Sign3_3 width={width/2} sizeType={sizeType} time={false} sizeView={false} baseData={baseData}></Sign3_3>
                </g>
                }
                {gap&&
                <line
                    x1={widthLine} y1={heightLine*0.5}
                    x2={widthLine} y2={heightLine}
                    stroke="white"
                    strokeWidth={border*1.5}
                    strokeDasharray={`${border*3.5},${border*1.7}`}
                    />
                }
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
                {lines.map((line:Line2,i:number)=>{
                    return <g key={i} transform={`translate(${widthLine*i})`}>{generateFrontLine((lines.length!=i+1),line,widthLine,heightLine)}</g>;
                })}
            </g>
        </svg>)
            
    }
