import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  datos = new Array;

  tarea = "";
  descripcion = "";
  resultado = false;
  mensaje = '';
  
  AgregarTarea(){
    if(this.tarea!='' &&this.descripcion!=''){
      this.datos.push({'Tarea': this.tarea, 'Descripcion':this.descripcion});
      this.limpiarCampos();
      this.resultado = true;
      this.mensaje="";
    }else{
      this.resultado = false;
      this.mensaje="Ingresa los campos, para agregar a la lista";
   }
  }
  
  limpiarCampos(){
    this.tarea = "";
    this.descripcion = "";
  }
  
  Eliminar(indice:number){
    this.datos.splice(indice, 1)
    }
  
  
  constructor() { }
  
  ngOnInit(): void {
  
    }
    
}
