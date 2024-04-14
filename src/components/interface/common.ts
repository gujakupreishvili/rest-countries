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
 export interface Post {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
}