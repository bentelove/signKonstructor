
interface LiftProps{
    x:number,
    y:number,
    rotate:number,
    color?:string,
    size?:number,
    height?:number
}
export default function LiftNMax({x,y,rotate=0,color="#1373d4",size=80,height=80}:LiftProps) {
    
    return (
        <g transform={`matrix(1,0,0,1,${-250+x},${y-(67*2+height)/2})`}>
            <g transform={`rotate(${rotate},250,${(67*2+height)/2})`}>
                <rect fill={color} x={0} y={0} width={500} height={67}></rect>
                <rect fill={color} x={0} y={67+height} width={500} height={67}></rect>
            </g>
        </g>
    )
}
