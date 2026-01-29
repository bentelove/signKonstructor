import { ReactNode } from "react"

interface LiftProps{
    x:number,
    y:number,
    rotate:number,
    color?:string,
    size?:number,
    height?:number,
    children?:ReactNode
}
export default function LiftNMini({x,y,rotate=0,color="#1373d4",size=80,height=145,children}:LiftProps) {
    return (
        <g transform={`matrix(1,0,0,1,${-(height/2)+x},${y-95})`}>
            <g transform={`rotate(${rotate},${height/2},95)`}>
                <rect fill={color} x={0} y={0} width={height} height={55}></rect>
                <rect fill={color} x={0} y={135} width={height} height={55}></rect>
                {children}
            </g>
        </g>
    )
}
