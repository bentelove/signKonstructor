import { BaseData, BaseSign } from "@/types/BaseSign"
import { useMemo } from "react";
import Simple7, { getWidthSeven } from "./Simple7";

interface Props extends BaseSign {
    distance:string,
    type:string
}
export default function Sign7_3({width,baseData,sizeType,sizeView,distance,type}: Props) {
    const widthSign = getWidthSeven(sizeType);
    const sizePicture = 2*(widthSign/baseData.seven.defaultWidth);
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
            <g transform={`matrix(${sizePicture},0,0,${sizePicture},${sizePicture*-318+widthSign*baseData.seven.white.top},${sizePicture*-142.5+widthSign*(baseData.seven.white.top+0.1)})`}>
                <rect 
                    x="412.841" 
                    y="142.537" 
                    width="94.22" 
                    height="189.483" 
                    fill = "black"
                    ry ="10"
                    rx ="10"
                    transform={`matrix(matrix(1, 0, 0, 1, 3.552713678800501e-15, -7.105427357601002e-15)`}/>
                <rect 
                    x="425.705" 
                    y="161.311" 
                    width="68.144" 
                    height="59.105" 
                    rx={widthSign*0.005}
                    fill= "white"
                    transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, -7.105427357601002e-15)"/>
                <path 
                    fill="black"
                    d="
                    M 409.016 157.139 
                    L 409.364 168.612 
                    L 399.629 168.612 
                    C 399.629 168.612 395.457 167.569 395.109 173.827 
                    C 394.761 180.085 394.761 185.301 394.761 185.301 
                    C 394.761 185.301 392.555 211.059 379.464 222.154 
                    C 359.994 243.362 338.091 266.657 338.091 266.657 
                    C 338.091 266.657 325.574 279.173 330.094 293.775 
                    C 334.614 308.377 340.524 313.593 350.259 318.112 
                    C 359.994 322.631 376.335 319.503 383.288 311.507 
                    C 390.241 303.511 394.414 299.338 394.066 281.954 
                    C 393.718 264.57 393.718 233.627 393.718 233.627 
                    C 393.718 233.627 391.632 218.677 409.016 217.982 
                    C 409.315 224.468 409.016 228.76 409.016 228.76 
                    C 409.016 228.76 404.149 227.369 404.149 236.409 
                    C 404.149 245.449 404.496 290.298 404.496 290.298 
                    C 404.496 290.298 406.235 326.457 361.037 331.324 
                    C 321.054 329.585 316.187 289.603 319.316 279.868 
                    C 322.445 270.133 332.18 257.617 349.911 238.843 
                    C 367.642 220.069 375.292 209.29 375.292 209.29 
                    C 375.292 209.29 384.129 199.473 384.331 181.129 
                    C 384.533 173.054 384.679 169.655 384.679 169.655 
                    C 384.679 169.655 385.722 157.834 396.5 157.139 
                    C 407.278 156.444 408.668 156.444 409.016 157.139 Z"
                transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, -7.105427357601002e-15)"/>

            </g>
        </svg>
    );
}