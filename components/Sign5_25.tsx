import { BaseData, BaseSign } from "@/types/BaseSign"
import { useMemo } from "react";

interface Props extends BaseSign {
    city: string;
    signType?: '5.25' | '5.26'; // Тип знака: начало или конец населенного пункта
}

// Константы типоразмеров по ГОСТ Р 52290-2004 (в мм)
const TYPE_SIZES = {
    'I': { letterHeight: 75, borderMargin: 15, verticalMargin: 37.5 },
    'II': { letterHeight: 100, borderMargin: 20, verticalMargin: 50 },
    'III': { letterHeight: 150, borderMargin: 30, verticalMargin: 75 },
    'IV': { letterHeight: 200, borderMargin: 40, verticalMargin: 100 },
    'V': { letterHeight: 250, borderMargin: 50, verticalMargin: 125 },
};

// Пропорции ширины символов для шрифта ГОСТ (относительно высоты буквы)
const CHAR_WIDTH_RATIOS: Record<string, number> = {
    'А': 0.675, 'Б': 0.6, 'В': 0.65, 'Г': 0.5, 'Д': 0.7, 'Е': 0.615, 'Ё': 0.6, 'Ж': 1.0,
    'З': 0.6, 'И': 0.7, 'Й': 0.7, 'К': 0.65, 'Л': 0.7, 'М': 0.9, 'Н': 0.7, 'О': 0.7,
    'П': 0.7, 'Р': 0.6, 'С': 0.7, 'Т': 0.6, 'У': 0.6, 'Ф': 0.9, 'Х': 0.7, 'Ц': 0.7,
    'Ч': 0.65, 'Ш': 1.0, 'Щ': 1.1, 'Ъ': 0.8, 'Ы': 0.9, 'Ь': 0.6, 'Э': 0.7, 'Ю': 1.0,
    'Я': 0.7, 
    'A': 0.65, 'B': 0.6, 'C': 0.7, 'D': 0.7, 'E': 0.6, 'F': 0.6, 'G': 0.7, 'H': 0.7,
    'I': 0.3, 'J': 0.5, 'K': 0.65, 'L': 0.6, 'M': 0.9, 'N': 0.7, 'O': 0.7, 'P': 0.6,
    'Q': 0.7, 'R': 0.65, 'S': 0.7, 'T': 0.6, 'U': 0.7, 'V': 0.7, 'W': 1.0, 'X': 0.7,
    'Y': 0.7, 'Z': 0.7,
    ' ': 0.3, '-': 0.4, '.': 0.2, ',': 0.2,
    '0': 0.6, '1': 0.4, '2': 0.6, '3': 0.6, '4': 0.7, '5': 0.6, '6': 0.6, '7': 0.6,
    '8': 0.6, '9': 0.6
};

interface SignDimensions {
    width: number;
    height: number;
    fontSize: number;
    text: string;
    params: typeof TYPE_SIZES[keyof typeof TYPE_SIZES];
    textWidth: number;
}

// Функция расчета ширины текста
const calculateTextWidth = (text: string, letterHeight: number, letterSpacing = 0.1): number => {
    if (!text) return 0;
    
    let totalWidth = 0;
    
    for (const char of text.toUpperCase()) {
        const charRatio = CHAR_WIDTH_RATIOS[char] || 0.6;
        totalWidth += charRatio * letterHeight;
    }
    
    // Добавляем межбуквенные интервалы
    if (text.length > 1) {
        totalWidth += (text.length - 1) * letterSpacing * letterHeight;
    }
    
    return totalWidth;
};

// Основная функция расчета размеров знака
const calculateSignDimensions = (
    city: string,
    typeSize: keyof typeof TYPE_SIZES = 'III'
): SignDimensions => {
    const params = TYPE_SIZES[typeSize];
    const letterHeight = params.letterHeight;
    
    // ЗАЩИТА: если город не указан, используем значение по умолчанию
    const displayText = city?.trim() || 'ГОРОД';
    
    // Рассчитываем ширину всего текста
    const textWidth = calculateTextWidth(displayText, letterHeight);
    
    // Расчет итоговых размеров знака по ГОСТ
    // Ширина = ширина текста + 2 * borderMargin (0.2h с каждой стороны)
    const width = Math.ceil(textWidth + 2 * params.borderMargin);
    
    // ВЫСОТА: оптимальная высота для квадратного знака с текстом
    const height = Math.ceil(letterHeight * 2.0);
    
    return {
        width,
        height,
        fontSize: letterHeight,
        text: displayText,
        params,
        textWidth
    };
};



export default function Sign5_25({ 
    baseData, 
    sizeType = 3, 
    width: containerWidth, 
    city,
    signType = '5.25' // По умолчанию знак "Начало населенного пункта"
}: Props) {
    // Определяем типоразмер
    const typeSize = useMemo(() => {
        if (sizeType === 1) return 'I';
        if (sizeType === 2) return 'II';
        if (sizeType === 3) return 'III';
        if (sizeType === 4) return 'IV';
        if (sizeType === 5) return 'V';
        return 'III';
    }, [sizeType]) as keyof typeof TYPE_SIZES;
    
    // Расчет размеров знака с защитой от undefined
    const dimensions = useMemo(() => {
        try {
            return calculateSignDimensions(city || '', typeSize);
        } catch (error) {
            console.error('Ошибка расчета размеров знака:', error);
            // Возвращаем значения по умолчанию при ошибке
            const params = TYPE_SIZES[typeSize];
            return {
                width: 600,
                height: 300,
                fontSize: params.letterHeight,
                text: 'ГОРОД',
                params,
                textWidth: 300
            };
        }
    }, [city, typeSize]);
    
    const { width: signWidth, height: signHeight, fontSize, text, params, textWidth } = dimensions;
    
    // Параметры оформления с защитой от undefined
    const outlineBlack = signHeight * ((baseData?.outlineBlack) || 0.02);
    const outlineWhite = signHeight * ((baseData?.outlineWhite) || 0.04);
    const border = signHeight * 0.05;
    
    // Позиция текста по вертикали
    const textY = signHeight / 2 + fontSize * 0.35;
    
    // Масштабирование для контейнера
    const scale = containerWidth ? containerWidth / signWidth : 1;
    const displayHeight = containerWidth ? signHeight * scale : signHeight;
    
    // Рассчитываем фактические отступы текста от краев
    const actualTextMargin = (signWidth - textWidth) / 2;
    const line = params.verticalMargin;
    
    // Рассчитываем координаты для диагональной полосы (для знака 5.23.2)
    
    return (
        <svg 
            width={containerWidth || signWidth} 
            height={displayHeight}
            viewBox={`0 0 ${signWidth} ${signHeight}`}
            style={{ 
                display: 'block',
                fontFamily: '"Arial Black", Arial, sans-serif',
                fontWeight: 900
            }}
        >
            {/* Черный фон с закругленными углами */}
            <rect 
                width={signWidth} 
                height={signHeight}
                rx={signHeight * 0.1}
                ry={signHeight * 0.1}
                fill="#000000"
            />
            
            {/* Белая обводка (outer) */}
            <rect 
                x={outlineBlack}
                y={outlineBlack}
                width={signWidth - 2 * outlineBlack}
                height={signHeight - 2 * outlineBlack}
                rx={signHeight * 0.09}
                ry={signHeight * 0.09}
                fill="#ffffff"
            />
            
            {/* Черная внутренняя обводка */}
            
            {/* Основное белое поле для текста */}
            <rect 
                x={border}
                y={border}
                width={signWidth - 2 * border}
                height={signHeight - 2 * border}
                rx={signHeight * 0.07}
                ry={signHeight * 0.07}
                fill={baseData.bgBlue}
            />
            
            {/* Текст названия города (одна строка) */}
            <text
                fill="#ffffff"
                fontSize={fontSize}
                fontWeight="900"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                letterSpacing={fontSize * 0.02}
                x={signWidth / 2}
                y={textY}
            >
                {text.toUpperCase()}
            </text>
            
            {/* Диагональная красная полоса для знака 5.23.2 */}
            {signType === '5.26' && (
                <path fill={baseData.bgCircle} d={`M ${(signWidth-signHeight)/3*2+signHeight+line/2} ${border} 
                    L ${(signWidth-signHeight)/3*2+signHeight-line/2} ${border} 
                    L ${(signWidth-signHeight)/3-line/2} ${signHeight-border}
                    L ${(signWidth-signHeight)/3+line/2} ${signHeight-border}`}
                transform={`translate(},) `}
                />
            )}
            
            {/* Отладочная информация */}
            {baseData?.debug && (
                <>
                    {/* Границы знака */}
                    <rect
                        x="0"
                        y="0"
                        width={signWidth}
                        height={signHeight}
                        fill="none"
                        stroke="rgba(255,0,0,0.5)"
                        strokeWidth="1"
                    />
                    
                    {/* Черная оконтовка (для отладки позиционирования полосы) */}
                    <rect
                        x={outlineBlack}
                        y={outlineBlack}
                        width={signWidth - 2 * outlineBlack}
                        height={signHeight - 2 * outlineBlack}
                        fill="none"
                        stroke="rgba(0,0,0,0.3)"
                        strokeWidth="2"
                    />
                    
                    {/* Центральные линии для проверки центрирования */}
                    <line
                        x1={signWidth / 2}
                        y1="0"
                        x2={signWidth / 2}
                        y2={signHeight}
                        stroke="rgba(0,0,255,0.5)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                    />
                    <line
                        x1="0"
                        y1={signHeight / 2}
                        x2={signWidth}
                        y2={signHeight / 2}
                        stroke="rgba(0,0,255,0.5)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                    />
                    
                    
                    {/* Текстовые метки */}
                    <text
                        x="10"
                        y="25"
                        fontSize="12"
                        fill="red"
                        fontWeight="normal"
                    >
                        Знак: {signType}
                    </text>
                    <text
                        x="10"
                        y="40"
                        fontSize="12"
                        fill="red"
                        fontWeight="normal"
                    >
                        Размер: {signWidth}×{signHeight} мм
                    </text>
                    <text
                        x="10"
                        y="55"
                        fontSize="12"
                        fill="red"
                        fontWeight="normal"
                    >
                        Буквы: {fontSize} мм
                    </text>
                    
                </>
            )}
        </svg>
    );
}