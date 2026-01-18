import { BaseData, BaseSign } from "@/types/BaseSign"
import { useEffect, useMemo, useState } from "react";
import Simple7, { getWidthSeven } from "./Simple7";

interface Props extends BaseSign {
    cities: City[],
    gapA: number,
    gapB: number,
    fontSize: number,
    color:ColorSign
}
interface City{
    name:string,
    distance: number,
    transcription?: string,
    underText?: string
}
export enum ColorSign{
    BLUE,
    WHITE
}
const CHAR_WIDTH_RATIOS: Record<string, number> = {
    'А': 0.675, 'Б': 0.6, 'В': 0.65, 'Г': 0.5, 'Д': 0.7, 'Е': 0.615, 'Ё': 0.6, 'Ж': 1.0,
    'З': 0.6, 'И': 0.7, 'Й': 0.7, 'К': 0.65, 'Л': 0.7, 'М': 0.9, 'Н': 0.7, 'О': 0.7,
    'П': 0.7, 'Р': 0.6, 'С': 0.7, 'Т': 0.6, 'У': 0.6, 'Ф': 0.9, 'Х': 0.7, 'Ц': 0.7,
    'Ч': 0.65, 'Ш': 1.0, 'Щ': 1.1, 'Ъ': 0.8, 'Ы': 0.9, 'Ь': 0.6, 'Э': 0.7, 'Ю': 1.0,
    'Я': 0.7, 
    'A': 0.65, 'B': 0.6, 'C': 0.7, 'D': 0.7, 'E': 0.6, 'F': 0.6, 'G': 0.7, 'H': 0.7,
    'I': 0.3, 'J': 0.5, 'K': 0.65, 'L': 0.6, 'M': 0.9, 'N': 0.7, 'O': 0.7, 'P': 0.6,
    'Q': 0.7, 'R': 0.65, 'S': 0.7, 'T': 0.6, 'U': 0.7, 'V': 0.7, 'W': 1.0, 'X': 0.7,
    'Y': 0.7, 'Z': 0.7,
    ' ': 0.3, '-': 0.4, '.': 0.2, ',': 0.2,
    '0': 0.5, '1': 0.5, '2': 0.5, '3': 0.5, '4': 0.55, '5': 0.5, '6': 0.5, '7': 0.5,
    '8': 0.5, '9': 0.5
};



export default function Sign6_12({width,baseData,fontSize=100,gapA=0.5,gapB=0.5,cities,color}: Props) {
    const cSize = 1.4;
    const borderC = 5;
    const letterSpacing = 0.05;
    const calculateTextWidth = (text: string, letterHeight: number, letterSpacing:number): number => {
        if (!text) return 0;
        
        let totalWidth = 0;
        
        for (const char of text.toUpperCase()) {
            const charRatio = CHAR_WIDTH_RATIOS[char] || 0.6;
            totalWidth += charRatio * letterHeight;
        }
        
        if (text.length > 1) {
            totalWidth += (text.length - 1) * letterSpacing * letterHeight;
        }
        
        return totalWidth * cSize;
    };
    const maxWidthF = ():number[] =>{
        let maxName = 0;
        let maxDistance = 0;
        cities?.forEach((city:City,i)=>{
            const cityWidth = calculateTextWidth(city.name, fontSize,letterSpacing);
            let transcriptionWidth = 0;
            if(city.transcription){transcriptionWidth = calculateTextWidth(city.transcription,fontSize,letterSpacing)}
            const distanceWidth = calculateTextWidth(String(city.distance), fontSize,letterSpacing);
            if(cityWidth>maxName){maxName=cityWidth}
            if(transcriptionWidth>maxName){maxName=transcriptionWidth}
            if(distanceWidth>maxDistance){maxDistance=distanceWidth}
        })
        return [maxName,maxDistance];
    }

    const maxWidth = maxWidthF();
    const size = calculateSignSize();

    function calculateSignSize(){
        let width = maxWidth[0]+maxWidth[1]+gapA*3+(0.1*fontSize*borderC);
        let countTranscription = 0;
        cities.forEach((city)=>{
            if(city.transcription){
                countTranscription++;
            }
            if(city.underText){
                countTranscription++;
            }
        })
        let height = (cities.length+countTranscription)*fontSize+(gapB*((cities.length+countTranscription)-1)+(gapA*2))+(2*baseData.outlineWhite*fontSize*borderC);
        return [width,height]
    }
    function SignCity(city:City){
    const topY = city.underText?fontSize+gapB:0;
    return <g transform={`matrix(1,0,0,1,0,${fontSize+gapA})`}>
            {city.underText&&
            <text
                fill={color==ColorSign.BLUE?"#ffffff":"#000000"}
                fontSize={fontSize*cSize}
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                x={0-(letterSpacing*fontSize*cSize)}
            >
                {city.underText.toLowerCase()}
            </text>
            }
            <text
                fill={color==ColorSign.BLUE?"#ffffff":"#000000"}
                fontSize={fontSize*cSize}
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                x={0-(letterSpacing*fontSize*cSize)}
                y={topY}
            >
                {city.name.toUpperCase()}
            </text>
            <text
                fill={color==ColorSign.BLUE?"#ffffff":"#000000"}
                fontSize={fontSize*cSize}
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                textAnchor="end"
                x={maxWidth[0]+gapA+maxWidth[1]}
                y={topY+(city.transcription?fontSize+gapB:0)}
            >
                {String(city.distance).toUpperCase()}
            </text>
            {city.transcription&&
                <>
                    <text
                        fill={color==ColorSign.BLUE?"#ffffff":"#000000"}
                        fontSize={fontSize*cSize}
                        fontWeight="900"
                        fontFamily="Arial, sans-serif"
                        x={0-(letterSpacing*fontSize*cSize)}
                        y={fontSize+gapB}
                    >
                        {city.transcription.toUpperCase()}
                    </text>
                </>
            }
            {baseData.debug&&
                <>
                    <rect
                        width={maxWidth[0]}
                        height={fontSize}
                        fill='none'
                        stroke='red'
                        strokeWidth={fontSize/100}
                        
                        y={0-fontSize}
                    />
                </>
            }
        </g>
    
}
    let topY = Array();
    let lastTopY = fontSize/10;
    cities.forEach((city:City)=>{
        topY.push(lastTopY);
        lastTopY += fontSize+gapB;
        if(city.transcription){lastTopY+= fontSize+gapB}
        if(city.underText){lastTopY+= fontSize+gapB}
    })
    return (
        <svg 
            width={width} 
            viewBox={`0 0 ${size[0]} ${size[1]}`}
            style={{ 
                display: 'block',
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontWeight: 900
            }}
        >
        <rect
            x={0}
            y={0}
            width={size[0]}
            height={size[1]}
            rx={45}
            fill='#000000'
        />
        <rect
            x={baseData.outlineBlack*fontSize*borderC}
            y={baseData.outlineBlack*fontSize*borderC}
            width={size[0]-(2*baseData.outlineBlack*fontSize*borderC)}
            height={size[1]-(2*baseData.outlineBlack*fontSize*borderC)}
            rx={43}
            fill={'#ffffff'}
        />
        <rect
            x={baseData.outlineWhite*fontSize*borderC}
            y={baseData.outlineWhite*fontSize*borderC}
            width={size[0]-(2*baseData.outlineWhite*fontSize*borderC)}
            height={size[1]-(2*baseData.outlineWhite*fontSize*borderC)}
            rx={40}
            fill={color==ColorSign.BLUE?baseData.bgBlue:"#000000"}
        />
        {color==ColorSign.WHITE&&
            <rect
                x={0.05*fontSize*borderC}
                y={0.05*fontSize*borderC}
                width={size[0]-(0.1*fontSize*borderC)}
                height={size[1]-(0.1*fontSize*borderC)}
                rx={30}
                fill="#ffffff"
            />
        }
        
        {cities?.map((city:City,i)=>{
            return <g transform={`matrix(1,0,0,1,${gapA+(baseData.outlineWhite*fontSize*borderC)},${topY[i]})`} key={i}>
                {SignCity(city)}
            </g>;
        })}
        {baseData.debug&&
            <g>
            <text
                    x={fontSize*0.3}
                    y={fontSize*0.3*2}
                    fontSize={fontSize*0.3}
                    fill="red"

            >
                Ширина: {Math.round(size[0])} мм
                </text> 
            <text
                    x={fontSize*0.3}
                    y={fontSize*0.3*3}
                    fill="red"
                    fontSize={fontSize*0.3}

            >
                Высота: {Math.round(size[1])} мм
                </text> 
            <text
                    x={fontSize*0.3}
                    y={fontSize*0.3*4}
                    fill="red"
                    fontSize={fontSize*0.3}

            >
                Ширина названия: {Math.round(maxWidth[0])} мм
                </text> 
            <text
                    x={fontSize*0.3}
                    y={fontSize*0.3*5}
                    fill="red"
                    fontSize={fontSize*0.3}
            >
                Ширина расстояния: {Math.round(maxWidth[1])} мм
                </text> 
            </g>
        }
        </svg>
    );
}