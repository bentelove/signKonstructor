import { BaseData, BaseSign } from "@/types/BaseSign"
import { useMemo } from "react";
import Simple7, { getWidthSeven } from "./Simple7";

interface Props extends BaseSign {
    distance:string,
    type:string
}
export default function Sign7_1({width,baseData,sizeType,sizeView,distance,type}: Props) {
    const widthSign = getWidthSeven(sizeType);
    const scale = widthSign/baseData.seven.defaultWidth;
    const widthPlus = 0.4;
    const heightPlus = 0.1;
    
    return (
        <svg 
            width={width} 
            viewBox={`0 0 ${widthSign} ${widthSign*1.5}`}
            style={{ 
                display: 'block',
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontWeight: 900
            }}
        >
            <Simple7 width={widthSign} baseData={baseData} distance={distance} type={type}/>
            <rect
                x={widthSign*((1-widthPlus)/2)}
                y={widthSign*((baseData.seven.white.width-heightPlus)/2+baseData.seven.white.top)}
                width={widthSign*widthPlus}
                height={widthSign*heightPlus}
                fill={baseData.bgCircle}
            />
            <rect
                x={widthSign*((1-heightPlus)/2)}
                y={widthSign*((baseData.seven.white.width-widthPlus)/2+baseData.seven.white.top)}
                height={widthSign*0.4}
                width={widthSign*0.1}
                fill={baseData.bgCircle}
            />
        </svg>
    );
}