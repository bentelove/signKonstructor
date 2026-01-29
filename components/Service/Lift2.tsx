import { ReactNode } from "react";

interface LiftProps{
    x:number,
    y:number,
    rotate?:number,
    rotate2:number,
    color?:string,
    size?:number,
    l?:number,
    children?: ReactNode
}
export default function Lift2({x,y,rotate=0,rotate2=0,l=80,color="#1373d4",size=80,children}:LiftProps) {
    const heightLift = 40;
    const widthLift = 344;

    return (
        <>
            <g transform={`matrix(1,0,0,1,${-widthLift/2+x},${-heightLift/2+y})`}>
                <g transform={`rotate(${rotate},${widthLift/2},${heightLift/2})`}>
                    <rect fill={color} x={0} y={0} width={26} height={40}/>
                    <rect fill={color} x={26+290} y={0} width={26} height={40}/>
                    <rect fill={color} x={26} y={7.5} width={290} height={25}/>
                    <rect fill={color} x={22} y={5} width={15} height={30}/>
                    <rect fill={color} x={15+290} y={5} width={15} height={30}/>
                    <rect fill="black" opacity={0.2} x={22} y={5} width={15} height={30}/>
                    <rect fill="black" opacity={0.2} x={15+290} y={5} width={15} height={30}/>
                    <rect fill={color} x={26} y={0} width={l} height={10} transform={`rotate(${0-rotate2},26,5)`}/>
                    <rect fill={color} x={26} y={30} width={l} height={10} transform={`rotate(${rotate2},26,35)`}/>
                    <rect fill={color} x={290+26} y={0} width={l} height={10} transform={`rotate(${180-(0-rotate2)},316,5)`}/>
                    <rect fill={color} x={290+26} y={30} width={l} height={10} transform={`rotate(${180-rotate2},316,35)`}/>
                    <rect fill="black" opacity={0.1} x={26} y={0} width={l} height={10} transform={`rotate(${0-rotate2},26,5)`}/>
                    <rect fill="black" opacity={0.1} x={26} y={30} width={l} height={10} transform={`rotate(${rotate2},26,35)`}/>
                    <rect fill="black" opacity={0.1} x={290+26} y={0} width={l} height={10} transform={`rotate(${180-(0-rotate2)},316,5)`}/>
                    <rect fill="black" opacity={0.1} x={290+26} y={30} width={l} height={10} transform={`rotate(${180-rotate2},316,35)`}/>
                    {children}
                </g>
            </g>
        </>
    )
}
