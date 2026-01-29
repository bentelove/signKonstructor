import { BaseData, BaseSign } from "@/types/BaseSign"
import { useEffect, useMemo, useState } from "react";
import Simple7, { getWidthSeven } from "./Simple7";
import { ColorSign } from "./Sign6_12";

interface Props extends BaseSign {
    cities: City[],
    gapA: number,
    gapB: number,
    fontSize: number,
    color:ColorSign
}
interface City{
    color?:ColorSign,
    name:string,
    distance: number,
    direction?: DirectionCity
}
export enum DirectionCity{
    LEFT,
    LEFT_FRONT,
    FRONT,
    RIGHT_FRONT,
    RIGHT
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


export default function Sign6_10_1({width,baseData,fontSize=100,gapA=0.5,gapB=0.5,cities,color}: Props) {
    const cSize = 1.4;

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


    const city = "Череповец";

    return (
        <svg 
            width={width} 
            viewBox={`0 0 1000 1000`}
            style={{ 
                display: 'block',
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontWeight: 900
            }}
        >
            <rect
                x={0}
                y={0}
                width={calculateTextWidth("Череповец",100,0)}
                height={100}
                opacity={0.3}
            />
            <text
                fill={color==ColorSign.BLUE?"#ffffff":"#000000"}
                fontSize={fontSize*cSize}
                fontWeight="900"
                fontFamily="Arial, sans-serif"
                letterSpacing={-10}
                x={0-(0.1*fontSize*cSize)}
                y={fontSize}
            >
                {"Череповец".toUpperCase()}
            </text>
        </svg>
    );
}