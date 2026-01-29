import { BaseData } from "@/types/BaseSign"

export default function Grid() {
    
    return (
        <>
            {Array.from({ length: 200 }).map((_, i) => (
                <g key={`grid-10-${i}`}>
                <line 
                    x1={i * 10} 
                    y1="0" 
                    x2={i * 10} 
                    y2="2000" 
                    stroke="#f0f0f0" 
                    strokeWidth="0.2"
                />
                <line 
                    x1="0" 
                    y1={i * 10} 
                    x2="2000" 
                    y2={i * 10} 
                    stroke="#f0f0f0" 
                    strokeWidth="0.2"
                />
                </g>
            ))}
            
            {Array.from({ length: 40 }).map((_, i) => (
                <g key={`grid-50-${i}`}>
                <line 
                    x1={i * 50} 
                    y1="0" 
                    x2={i * 50} 
                    y2="2000" 
                    stroke="#dddddd" 
                    strokeWidth="0.5"
                />
                <line 
                    x1="0" 
                    y1={i * 50} 
                    x2="2000" 
                    y2={i * 50} 
                    stroke="#dddddd" 
                    strokeWidth="0.5"
                />
                </g>
            ))}
            
            {Array.from({ length: 20 }).map((_, i) => (
                <g key={`grid-100-${i}`}>
                <line 
                    x1={i * 100} 
                    y1="0" 
                    x2={i * 100} 
                    y2="2000" 
                    stroke="#aaaaaa" 
                    strokeWidth="1"
                />
                <line 
                    x1="0" 
                    y1={i * 100} 
                    x2="2000" 
                    y2={i * 100} 
                    stroke="#aaaaaa" 
                    strokeWidth="1"
                />
                </g>
            ))}
        </>
    )
}