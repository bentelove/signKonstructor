import { BaseData, BaseSign } from "@/types/BaseSign"
import { useMemo } from "react";
import Simple7, { getWidthSeven } from "./Simple7";

interface Props extends BaseSign {
    distance:string,
    type:string
}
export default function Sign7_2({width,baseData,sizeType,sizeView,distance,type}: Props) {
    const widthSign = getWidthSeven(sizeType);
    const sizePicture = 2.3*(widthSign/baseData.seven.defaultWidth);
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
            <g transform={`matrix(1,0,0,1,${sizePicture*49},${sizePicture*105})`}>
                <path 
                    transform={`matrix(${sizePicture},0,0,${sizePicture},${-367.743*sizePicture},${-131.878*sizePicture})`} 
                    d="M 367.743 217.902 
                    L 366.975 319.913 
                    L 387.988 320.317 
                    L 388.392 292.434 
                    L 554.478 292.434 
                    L 554.478 319.508 
                    L 574.278 319.913 
                    L 574.683 234.647 
                    C 574.683 234.647 575.087 226.161 564.984 225.353 
                    C 554.881 224.545 554.478 233.435 554.478 233.435 
                    L 554.478 262.126 
                    L 388.392 262.53 
                    L 387.806 216.912 
                    C 387.806 216.912 388.392 206.36 377.482 206.36 
                    C 366.572 206.36 367.743 218.306 367.743 217.902 Z"/>
                <path 
                    transform={`matrix(${sizePicture},0,0,${sizePicture},${-367.743*sizePicture},${-131.878*sizePicture})`} 
                    d="M 395.694 259.54 
                    L 453.79 259.722 
                    L 453.608 248.977 
                    C 453.608 248.977 453.244 241.51 445.049 240.963 
                    C 436.854 240.416 403.889 240.599 403.889 240.599 
                    C 403.889 240.599 395.694 240.599 395.329 249.523 
                    C 394.964 258.447 395.511 259.904 395.694 259.54 Z"/>
                <rect 
                    transform={`matrix(${sizePicture},0,0,${sizePicture},${-367.743*sizePicture},${-131.878*sizePicture})`} 
                    x="433.439" 
                    y="159.8" 
                    width="75.471" 
                    height="20.653" 
                    fill={baseData.bgCircle}/>
                <rect 
                    transform={`matrix(${sizePicture},0,0,${sizePicture},${-367.743*sizePicture},${-131.878*sizePicture})`} 
                    x="460.714" 
                    y="131.878" 
                    width="20.892" 
                    height="76.068" 
                    fill={baseData.bgCircle}/>
            </g>
        </svg>
    );
}