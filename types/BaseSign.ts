
export interface BaseSign{
  width: number,
  sizeType: number,
  time?: boolean,
  sizeView: boolean,
  baseData: BaseData
}
export interface BaseData{
    bgCircle: string,
    bgBlue: string,
    outlineBlack: number,
    outlineWhite:number,
    borderCircle:number,
    zipBorderWhite:number,
    zipBorderBlack:number,
    seven: SignSeven,
    debug?: boolean
}
export interface SignSeven{
  defaultWidth:number,
  white:SignSevenWhite,
  text:SignSevenText
}
export interface SignSevenWhite{
  top:number,
  width:number
}
export interface SignSevenText{
  top: number,
  dirRectTop: number,
  dirRectHeight: number,
  dirRectWidth: number,
  dirTriHeight:number,
  dirTriWidth: number,
  dirX: number
}