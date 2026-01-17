import { BaseData } from "@/types/BaseSign"
import { useState } from "react";
import { text } from "stream/consumers";

interface Simple7Props{
    width:number,
    baseData: BaseData,
    distance?:string,
    type?: string
}

export function getWidthSeven(sizeType:number){
    switch(sizeType){
        case 1: return 500;
        case 2: return 700;
        case 3: return 900;
        default: return 700;
    }
}
export default function Simple7({width=700,baseData,distance,type}:Simple7Props){
    const height = width*1.5;
    let textMargin = 0;
    (type==='right')&&(textMargin=0.13);
    (type==='left')&&(textMargin=-0.13);
    return <>
        <rect 
            x={0}
            y={0}
            width={width}
            height={height}
            rx={45}
            ry={45}
            
            fill={"#000000"}
        />
        <rect 
            x={baseData.outlineBlack*width}
            y={baseData.outlineBlack*width}
            width={width*(1-(2*baseData.outlineBlack))}
            height={height-2*(baseData.outlineBlack*width)}
            rx={43}
            ry={43}
            
            fill={"#ffffff"}
        />
        <rect 
            x={baseData.outlineWhite*width}
            y={baseData.outlineWhite*width}
            width={width*(1-(2*baseData.outlineWhite))}
            height={height-2*(baseData.outlineWhite*width)}
            rx={35}
            ry={35}
            
            fill={baseData.bgBlue}
        />
        <rect 
            x={width*(1-baseData.seven.white.width)/2}
            y={baseData.seven.white.top*width}
            width={baseData.seven.white.width*width}
            height={baseData.seven.white.width*width}
            rx={45}
            ry={45}
            fill={"#ffffff"}
        />
        {distance&&distance!==''&&(
            <>
            <text 
                x={width*(0.5-textMargin)} 
                y={width*baseData.seven.text.top}
                textAnchor="middle"
                fontFamily="sans-serif"
                fontSize={width*0.2}
                fontWeight="bold"
                fill="white"
            >
                {distance}
            </text>
            {(type==="right")&&
                <>
                    <rect
                        x={width*(1-baseData.seven.text.dirX-baseData.seven.text.dirTriWidth-baseData.seven.text.dirRectWidth)}
                        y={width*(baseData.seven.text.top+baseData.seven.text.dirRectTop)}
                        width={width*baseData.seven.text.dirRectWidth}
                        height={width*baseData.seven.text.dirRectHeight}
                        fill="white"
                    />
                    <polygon 
                        points={`
                            ${width*(1-baseData.seven.text.dirX-baseData.seven.text.dirTriWidth)},${width*(baseData.seven.text.top+baseData.seven.text.dirRectTop+((baseData.seven.text.dirRectHeight-baseData.seven.text.dirTriHeight)/2))}
                            ${width*(1-baseData.seven.text.dirX-baseData.seven.text.dirTriWidth)},${width*(baseData.seven.text.top+baseData.seven.text.dirRectTop+((baseData.seven.text.dirRectHeight+baseData.seven.text.dirTriHeight)/2))} 
                            ${width*(1-baseData.seven.text.dirX)},${width*(baseData.seven.text.top+baseData.seven.text.dirRectTop+(baseData.seven.text.dirRectHeight/2))}
                        `}
                        fill="white" 
                    />
                </>
            }
            {(type==="left")&&
                <>
                    <rect
                        x={width*(baseData.seven.text.dirX+baseData.seven.text.dirTriWidth)}
                        y={width*(baseData.seven.text.top+baseData.seven.text.dirRectTop)}
                        width={width*baseData.seven.text.dirRectWidth}
                        height={width*baseData.seven.text.dirRectHeight}
                        fill="white"
                    />
                    <polygon 
                        points={`
                            ${width*(baseData.seven.text.dirX+baseData.seven.text.dirTriWidth)},${width*(baseData.seven.text.top+baseData.seven.text.dirRectTop+((baseData.seven.text.dirRectHeight-baseData.seven.text.dirTriHeight)/2))}
                            ${width*(baseData.seven.text.dirX+baseData.seven.text.dirTriWidth)},${width*(baseData.seven.text.top+baseData.seven.text.dirRectTop+((baseData.seven.text.dirRectHeight+baseData.seven.text.dirTriHeight)/2))} 
                            ${width*(baseData.seven.text.dirX)},${width*(baseData.seven.text.top+baseData.seven.text.dirRectTop+(baseData.seven.text.dirRectHeight/2))}
                            `}
                        fill="white" 
                    />
                </>
            }
            </>
        )}

    </>
}