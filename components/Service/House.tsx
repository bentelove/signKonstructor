
interface HouseProps{
    x:number,
    y:number,
}
export default function House({x,y}:HouseProps) {
    const widthL = 136;
    
    return (
        <>
            <path 
                d={`
                    M ${x-5},${y-5}
                    L ${x+1200+5},${y-5}
                    L ${x+1200+5},${y+1600+5}
                    L ${x-5},${y+1600+5}
                    L ${x-160+10-50-5} ${y+990+260+250+10}
                    L ${x-160+10-120-5} ${y+990+260+5}
                    L ${x-160+10-3} ${y+990-5}
                    L ${x-5} ${y+990-5}
                    Z
                `}
                fill="#999999"
                stroke="black"
                strokeWidth={10}
                opacity={0.5}
            />
            <rect   x={x}       y={y}       height={20}     width={20}  fill="red"/>
            <rect   x={x+590}   y={y}       height={20}     width={20}  fill="red"/>
            <rect   x={x+1180}  y={y}       height={20}     width={20}  fill="red"/>
            <rect   x={x}       y={y+490}   height={20}     width={20}  fill="red"/>
            <rect   x={x+590}   y={y+490}   height={20}     width={20}  fill="red"/>
            <rect   x={x+1180}  y={y+490}   height={20}     width={20}  fill="red"/>
            <rect   x={x}       y={y+990}   height={20}     width={20}  fill="red"/>
            <rect   x={x+590}   y={y+990}   height={20}     width={20}  fill="red"/>
            <rect   x={x+1180}  y={y+990}   height={20}     width={20}  fill="red"/>
            <rect   x={x}       y={y+1580}  height={20}     width={20}  fill="red"/>
            <rect   x={x+590}   y={y+1580}  height={20}     width={20}  fill="red"/>
            <rect   x={x+1180}  y={y+1580}  height={20}     width={20}  fill="red"/>

            {/* Пристройка */}
            <rect   x={x-160+10}   y={y+990}   height={10}     width={10}  fill="red"/>
            <rect   x={x-160+10-120}   y={y+990+260}   height={10}     width={10}  fill="red"/>
            <rect   x={x-160+10-50}   y={y+990+260+250}   height={10}     width={10}  fill="red"/>

            
            {/* Туалет */}
            <rect   x={x+590+260}   y={y+990}   height={12}     width={12}  fill="red"/>
            <rect   x={x+590+260}   y={y+990+118}   height={12}     width={12}  fill="red"/>
            <rect   x={x+590}   y={y+990+118}   height={12}     width={12}  fill="red"/>
            <rect   x={x+590+130}   y={y+990+118}   height={12}     width={12}  fill="red"/>

            {/* Лестница */}
            <rect   x={x+590+widthL}   y={y+990+118+12}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+30}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+60}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+90}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+120}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+150}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+180}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+210}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+240}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+270}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+300}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590+widthL}   y={y+990+118+12+330}   height={30}     width={widthL}  fill="#eeeeee"/>
            {/* Лестница второй этаж */}
            {/*
            <rect   x={x+590}   y={y+990+118+12}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590}   y={y+990+118+12+30}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590}   y={y+990+118+12+60}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590}   y={y+990+118+12+90}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590}   y={y+990+118+12+120}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590}   y={y+990+118+12+150}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590}   y={y+990+118+12+180}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590}   y={y+990+118+12+210}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590}   y={y+990+118+12+240}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590}   y={y+990+118+12+270}   height={30}     width={widthL}  fill="#dddddd"/>
            <rect   x={x+590}   y={y+990+118+12+300}   height={30}     width={widthL}  fill="#eeeeee"/>
            <rect   x={x+590}   y={y+990+118+12+330}   height={30}     width={widthL}  fill="#dddddd"/>
            */}
            <rect x={x+570} y={y+860} width={60} height={20} fill={'red'}/>
            <rect x={x+610} y={y+860} width={20} height={130} fill={'red'}/>
        </>
    )
}