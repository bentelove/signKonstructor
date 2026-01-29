import { BaseData } from "@/types/BaseSign"

interface SimpleTriangleProps {
    size: number,
    time?: boolean,
    baseData: BaseData
}

interface DrawTriangleProps{
    color:string,
    size:number,
    maxSize:number,
    radius:number;
}

function DrawTriange({color,size,maxSize,radius}:DrawTriangleProps){
    const height = size * Math.sqrt(3) / 2;
    const maxHeight = maxSize * Math.sqrt(3) / 2;
    const border = (maxSize-size)/2;
    const topMagin = 2*border/Math.sqrt(3);

    
    // Основные вершины (центрированные)
    const top = { x: 0, y: topMagin-maxHeight/2};
    const left = { x: -size/2, y: height+topMagin-maxHeight/2 };
    const right = { x: size/2, y: height+topMagin-maxHeight/2 };
    
    // Векторы сторон
    const toLeft = { x: left.x - top.x, y: left.y - top.y };
    const toRight = { x: right.x - top.x, y: right.y - top.y };
    const toTopFromLeft = { x: top.x - left.x, y: top.y - left.y };
    const toRightFromLeft = { x: right.x - left.x, y: right.y - left.y };
    
    // Нормализация векторов
    const length = (v: {x: number, y: number}) => Math.sqrt(v.x * v.x + v.y * v.y);
    const normalize = (v: {x: number, y: number}) => {
        const l = length(v);
        return { x: v.x / l, y: v.y / l };
    };
    
    const nToLeft = normalize(toLeft);
    const nToRight = normalize(toRight);
    const nToTopFromLeft = normalize(toTopFromLeft);
    const nToRightFromLeft = normalize(toRightFromLeft);
    
    // Точки начала и конца закруглений
    const topToLeftStart = {
        x: top.x + nToLeft.x * radius,
        y: top.y + nToLeft.y * radius
    };
    
    const topToRightStart = {
        x: top.x + nToRight.x * radius,
        y: top.y + nToRight.y * radius
    };
    
    const leftToTopEnd = {
        x: left.x + nToTopFromLeft.x * radius,
        y: left.y + nToTopFromLeft.y * radius
    };
    
    const leftToRightStart = {
        x: left.x + nToRightFromLeft.x * radius,
        y: left.y + nToRightFromLeft.y * radius
    };
    
    const rightToLeftStart = {
        x: right.x - nToRightFromLeft.x * radius,
        y: right.y - nToRightFromLeft.y * radius
    };
    
    const rightToTopEnd = {
        x: right.x - nToRight.x * radius,
        y: right.y - nToRight.y * radius
    };
    
    // Построение пути с закруглениями
    const pathData = `
        M ${topToLeftStart.x},${topToLeftStart.y}
        L ${leftToTopEnd.x},${leftToTopEnd.y}
        Q ${left.x},${left.y} ${leftToRightStart.x},${leftToRightStart.y}
        L ${rightToLeftStart.x},${rightToLeftStart.y}
        Q ${right.x},${right.y} ${rightToTopEnd.x},${rightToTopEnd.y}
        L ${topToRightStart.x},${topToRightStart.y}
        Q ${top.x},${top.y} ${topToLeftStart.x},${topToLeftStart.y}
        Z
    `;
    return <path
        d={pathData}
        fill={color}
    />
} 
export default function SimpleTriangle({size = 700, time=true, baseData}: SimpleTriangleProps) {
    const borderWhite = size*0.025;
    const borderRed = size*(0.025+0.06)
    const color = (time)?'yellow':'white';
    
    return (
        <>
            <g transform={`matrix(1,0,0,1,${size/2},${size*Math.sqrt(3)/4})`}>
                <DrawTriange color="black" size={size} maxSize={size} radius={90}></DrawTriange>
                <DrawTriange color="white" size={size*0.99} maxSize={size} radius={90}></DrawTriange>
                <DrawTriange color={baseData.bgCircle} size={size*0.95} maxSize={size} radius={70}></DrawTriange>
                <DrawTriange color={color} size={size*0.8} maxSize={size} radius={40}></DrawTriange>
            </g>

        </>
    )
}