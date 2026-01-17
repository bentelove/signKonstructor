import { BaseData } from "@/types/BaseSign"

interface SimpleCircleProps{
    size:number,
    time?:boolean,
    baseData: BaseData
}

export default function SimpleCircle({size,time,baseData}:SimpleCircleProps){
    const color = time?'yellow':'white'
    return <>
    <circle 
            cx={size/2}
            cy={size/2}
            r={size/2}
            fill="black"
        />
        <circle 
            cx={size/2}
            cy={size/2}
            r={size/2-(size*(baseData.outlineBlack||0.005))}
            fill="white"
        />
        <circle 
            cx={size/2}
            cy={size/2}
            r={size/2-(size*(baseData.outlineWhite||0.025))}
            fill={baseData.bgCircle || '#cc0000'}
        />
        <circle 
            cx={size/2}
            cy={size/2}
            r={size/2-(size*(baseData.borderCircle||0.1))}
            fill={color}
        />
    </>
}