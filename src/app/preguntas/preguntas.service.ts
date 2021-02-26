import { IOpcion, IPregunta } from './interfaces/pregunta.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private _apiUrl:string='https://restcountries.eu/rest/v2/all?fields=name;capital;flag';
  datos=[];
  private opciones:IPregunta[]=[];


  obtenerDatos():Observable<any>{
    return this.http.get(this._apiUrl)
  }

  cargarOpciones(title:string,datos:any=this.datos){
    let cont=0;
    while(cont<4){
      let random=Math.round(Math.random()*datos.length);
      const options:IOpcion[]=[];

      let titulo=`${datos[random].capital} is the capital of: `;
      if(title=='bandera'){
        titulo='Which country does this flag belong to?';
      }

      for (let i = 0; i < 4; i++) {
        let random=Math.round(Math.random()*datos.length);
        options.push({title:datos[random].name,class:''})
      }

      let randomCorrect=Math.round(Math.random()*3);

      options[randomCorrect]={title:datos[random].name,class:''}

      this.opciones.unshift({
        titulo:titulo,
        options:options,
        correctOption:datos[random].name,
        flag:datos[random].flag
      })
      cont++;
    }

    return this.opciones;
  }

  constructor(private http:HttpClient) { }

}
