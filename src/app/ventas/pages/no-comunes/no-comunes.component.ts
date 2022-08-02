import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = "Fran";
  genero: string = "masculino";
  
  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  public cambiarPersona(): void {
    if (this.nombre === "Fran") {
      this.nombre = "Sofia"
      this.genero = "femenino";
    } else {
      this.nombre = "Fran";
      this.genero = "masculino";
    }
  }

  // i18nPlural
  clientes: string[] = ['Badajoz','Segovia','Logroño',"Armilla","Torrejon"];

  clientesMap = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  public eliminarCliente(): void {
    this.clientes.pop();
  }

  // KeyValue pipe
  persona = {
    nombre: 'Fran',
    edad: 26,
    direccion: 'Calle Tortola'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4...
}
