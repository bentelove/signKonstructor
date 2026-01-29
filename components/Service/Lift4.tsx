
interface LiftProps{
    x:number,
    y:number,
    rotate:number,
    color?:string,
    size?:number
}
export default function Lift4({x,y,rotate=10,color="#1373d4",size=80}:LiftProps) {
    const totalWidth = 619;
    const totalHeight = 356;
    const heightStolb = 28;
    const widthStolb = 491;
    const distanceLapa = size;
    const heightLapa = 57;
    
    return (
        <g transform={`matrix(1,0,0,1,${-totalWidth/2+x},${-totalHeight/2+y})`}>
            <g transform={`rotate(${rotate},${totalWidth/2},${totalHeight/2})`}>
                <rect fill={color} x={0} y={0} width={heightStolb} height={heightStolb}></rect>
                <rect fill={color} x={0} y={totalHeight-heightStolb} width={heightStolb} height={heightStolb}></rect>
                <rect fill={color} x={widthStolb} y={0} width={heightStolb} height={heightStolb}></rect>
                <rect fill={color} x={widthStolb} y={totalHeight-heightStolb} width={heightStolb} height={heightStolb}></rect>

                <rect fill={color} x={(heightStolb-20)/2} y={heightStolb} width={20} height={totalHeight-heightStolb*2}/>
                <rect fill={color} x={widthStolb+(heightStolb-20)/2} y={heightStolb} width={20} height={totalHeight-heightStolb*2}/>
                <rect fill="black" opacity={0.2} x={(heightStolb-20)/2} y={heightStolb} width={20} height={totalHeight-heightStolb*2}/>
                <rect fill="black" opacity={0.2} x={widthStolb+(heightStolb-20)/2} y={heightStolb} width={20} height={totalHeight-heightStolb*2}/>

                <rect fill={color} x={0} y={(totalHeight-(heightLapa*2+distanceLapa))/2} width={totalWidth} height={heightLapa}></rect>
                <rect fill={color} x={0} y={(totalHeight-(heightLapa*2+distanceLapa))/2+heightLapa+distanceLapa} width={totalWidth} height={heightLapa}></rect>
            </g>
        </g>
    )
}
