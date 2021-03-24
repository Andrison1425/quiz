import { IOpcion, IPregunta } from './../interfaces/pregunta.interface';
import { PreguntasService } from './../preguntas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  puntos:number=0;
  preguntaActual:number=0;
  preguntaMostrar:number=0;
  next:boolean=false;
  loading:boolean=true;

  opciones:IPregunta[]=[];

  constructor(private preguntasService:PreguntasService) { }

  selectOption(opcion:IOpcion){
    if(this.preguntaMostrar!==this.preguntaActual){
      return;
    }
    this.next=true;
    opcion.class='incorrecto';

    this.opciones[this.preguntaActual].options.forEach(ele => {
      if(ele.title===this.opciones[this.preguntaActual].correctOption){
        ele.class='correcto';
      }
    });

    if(opcion.title===this.opciones[this.preguntaActual].correctOption){
      this.puntos++;
    }
    this.preguntaMostrar++;
  }

  avanzar():void{
    this.preguntaActual++;
    this.next=false;
  }

  tryAgain(){
    this.opciones=this.preguntasService.cargarOpciones('capital');
    this.preguntaActual=0;
    this.preguntaMostrar=0;
    this.puntos=0;
  }


  ngOnInit(): void {
    this.preguntasService.obtenerDatos()
      .subscribe(datos=>{
        this.loading=false;
        this.opciones=this.preguntasService.cargarOpciones('capital',datos);
        this.preguntasService.datos=datos;
      }//cierre suscribe

      );
  }

}
