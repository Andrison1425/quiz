export interface IPregunta{
  titulo:string;
  options:IOpcion[],
  correctOption:string,
  flag:string
}

export interface IOpcion{
  title:string,
  class:string
}
