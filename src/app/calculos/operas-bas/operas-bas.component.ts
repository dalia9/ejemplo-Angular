import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1:string='';
  num2:string='';
  operacion:string='';

  resultado:number=0;


  constructor() { }

  operaciones(){

  if (this.operacion=='sumar'){
    this.sumar();
  }

  if (this.operacion=='restar'){
    this.restar();
  }

  if (this.operacion=='multiplicar'){
    this.multiplicar();
  }

  if (this.operacion=='dividir'){
    this.dividir();
  }

}

  sumar(): void {
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }

  restar(): void {
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }

  multiplicar(): void {
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }

  dividir(): void {
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }



  ngOnInit(): void {
    
  }

}
