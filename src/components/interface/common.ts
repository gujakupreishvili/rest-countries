export interface Types {
  name:{
    common:string;
  }
  flags: {
    png: string;
  }
  slice:()=>void
  number:number
  map:()=>void|any
  to:string
  currency:any
  text:string

}