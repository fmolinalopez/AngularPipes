import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  textoPipe: string = 'texto PARA modificar Con Pipes';
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
