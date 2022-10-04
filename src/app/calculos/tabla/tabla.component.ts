import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  numero:number;
  result:string[]=[];
  

  constructor() { }

  tabla():void{
    let result:string[]=[];

    for(let i=1; i<=10; i++){
      result.push(this.numero+"x"+i+"="+this.numero*i );
      this.result=result; //push es un metodo que sirve para empujar los datos
    }
  }

  ngOnInit(): void {
  }

}
