'use client'

import Sign1_1 from "@/components/Sign1_1";
import Sign3_1 from "@/components/Sign3_1";
import { BaseData } from "@/types/BaseSign";
import { useEffect, useState } from "react";


const BASE_DATA:BaseData = {
    bgCircle:'#cc0000',
    bgBlue:"#0B61A4",
    outlineBlack:0.005,
    outlineWhite:0.025,
    borderCircle:0.1,
    zipBorderWhite:0.06,
    zipBorderBlack:0.12,
    debug:true,
    seven:{
      defaultWidth:700,
      white:{
        top:0.2,
        width:0.8
      },
      text:{
        top: 1.32,
        dirRectTop: -0.105,
        dirRectHeight: 0.07,
        dirRectWidth: 0.1,
        dirTriHeight:0.14,
        dirTriWidth: 0.1,
        dirX:0.1
      }
    }
  }
export default function Production() {

  const [viewSignProduction,setViewSignProduction] = useState(false);
  const [signCreate,setSignCreate] = useState(false);
  const [viewMaterialProduction,setViewMaterialProduction] = useState(false);
  const [materialCreate,setMaterialCreate] = useState(false);
  const [complete,setComplete] = useState(false);

  return (
    <>
        <div className="p-4 bg-gray-100">
            <div className="p-2 text-2xl font-bold">Заказ №71 ИП Бентелев М.А. </div>
            <div className="p-4 mb-2  rounded-lg bg-white">
              <div className="p-2 text-xl font-bold">Знак 3.1 Въезд запрещен 600 мм «А» инженерная призматическая</div>
              <div className="grid grid-cols-7 gap-4">
                <div className="col-span-2">
                  <Sign3_1 sizeView={false} width={100} sizeType={1} time={false} baseData={BASE_DATA}></Sign3_1>
                  <div className="p-2">
                    Размер: I т.р. 600 мм<br/>
                    Материал: «А» инженерная призматическая<br/>
                    Параметр: Значение
                  </div>
                  <div className="p-4 bg-red-600 rounded-lg text-white font-bold text-center">Количество: 5 шт</div>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                  <div className="p-4 rounded-lg bg-gray-100">
                    <div className="text-lg mb-4 font-bold">Основы знаков</div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                          <div className="p-4 rounded-lg bg-gray-200">
                            <div className="text-center">Со склада:</div>
                            <div className="text-3xl font-bold text-center">2 шт</div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          {!signCreate&&viewSignProduction&&
                          <div className="p-4 cursor-pointer rounded-lg bg-gray-200"  onClick={()=>{setViewSignProduction(false)}}>
                            <div className="text-center">Необходимо произвести:</div>
                            <div className="text-3xl font-bold text-center">3 шт</div>
                            <div className="rounded-lg text-center p-4 bg-red-600 text-white font-bold" onClick={(e)=>{e.stopPropagation();setSignCreate(true)}}>Создать основы <span className="block text-sm font-normal">Треугольник 600 мм 3шт</span></div>
                          </div>
                          }
                          {!signCreate&&!viewSignProduction&&
                          <div className="p-4 cursor-pointer rounded-lg bg-gray-300" onClick={()=>{setViewSignProduction(true)}}>
                            <div className="text-center">Необходимо произвести:</div>
                            <div className="text-3xl font-bold text-center">3 шт</div>
                          </div>
                          }
                          {signCreate&&
                          <div className="p-4 rounded-lg bg-green-300">
                            <div className="text-center">Произведено:</div>
                            <div className="text-3xl font-bold text-center">3 шт</div>
                          </div>
                          }
                        </div>
                    </div>
                  </div>
                  <div className="p-4 cursor-pointer rounded-lg bg-gray-100">
                    <div className="text-lg mb-4 font-bold">Пленка</div>
                    {!materialCreate&&viewMaterialProduction&&
                    <div className="p-4 rounded-lg bg-gray-200">
                      <div className="text-center">Необходимо произвести:</div>
                      <div className="text-3xl font-bold text-center">5 шт</div>
                      <div className="rounded-lg text-center p-4 bg-red-600 text-white font-bold" onClick={(e)=>{e.stopPropagation();setMaterialCreate(true)}}>Создать пленку <span className="block text-sm font-normal">Знак 3.1 600 мм «А» инженерная призматическая 5шт</span></div>
                    </div>
                    }
                    {!materialCreate&&!viewMaterialProduction&&
                    <div className="p-4 rounded-lg bg-gray-300" onClick={()=>setViewMaterialProduction(true)}>
                      <div className="text-center">Необходимо произвести:</div>
                      <div className="text-3xl font-bold text-center">5 шт</div>
                    </div>
                    }
                    {materialCreate&&
                    <div className="p-4 rounded-lg bg-green-300">
                      <div className="text-center">Произведено</div>
                      <div className="text-3xl font-bold text-center">5 шт</div>
                    </div>}
                  </div>
                </div>
                <div className="col-span-2">
                    <div className="text-lg font-bold">Сборка знака</div>
                    {!complete&&signCreate&&materialCreate&&
                      <button className="bg-red-600 text-white rounded-lg p-4" onClick={()=>setComplete(true)}>Создать знак</button>
                    }
                    {!complete&&(!signCreate||!materialCreate)&&<>
                      <button className="bg-gray-300 text-white rounded-lg p-4">Создать знак</button>
                      <div className="text-sm">Перед производством знака необходимо произвести необходимое количество основ и пленок</div>
                    </>}
                    {complete&&<>
                      <div className="">Заказ готов</div>
                    </>}
                </div>
              </div>
            </div>
        </div>
    </>
  );
}