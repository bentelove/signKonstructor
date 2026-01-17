import { BaseData } from "@/types/BaseSign"

interface SimpleCircleProps{
    size:number,
    baseData: BaseData
}

export default function SimpleCircleBlue({size,baseData}:SimpleCircleProps){
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
            fill={baseData.bgBlue}
        />
    </>
}