import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  numeroBoletos:number;
  boletosPermitidos:number;
  boleto:number=12;
  nombre:string='';
  comprador:string='';
  total:number;
  boletoLimite:number=7;
  tarjeta:string='';
  mensaje:string='';
  personas:number=0;



  imagenUrl:string="https://www.fayerwayer.com/resizer/Ww8bCmm7zqlSh7Gjw4CEG9ndF5Q=/arc-photo-metroworldnews/arc2-prod/public/JAYHKTJ7FFHW3BNWW7LSY5ZQAM.jpg"

  constructor() { }

  cinepolis(){

    this.personas=parseInt (this.comprador) * 7;

    if(this.numeroBoletos  <= this.personas){


      if(this.numeroBoletos>5){
        this.total=(this.boleto*this.numeroBoletos*.85);
      }

      else if(this.numeroBoletos==3 || this.numeroBoletos == 4 || this.numeroBoletos==5){
        this.total=(this.boleto*this.numeroBoletos*.90);
      }

      else if(this.numeroBoletos == 1 ||  this.numeroBoletos == 2){
        this.total=(this.boleto*this.numeroBoletos);
      }

      else if(this.numeroBoletos>7){
        this.mensaje = 'No puedes comprar mas de 7 boletos';

      }

      if(this.tarjeta == 'si'){
        this.total=this.total*.90
      }

      if(this.tarjeta == 'no'){
        this.total;

      }
    }
    else{
      this.total=0;
    }
  }

  ngOnInit(): void {
  }

}
