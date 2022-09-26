import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html', //Hoja de estilos
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { //Implement es porque es la implementacion de la interface


  productos:any[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"auto 4 puertas",
      "Marca":"Nissan",
      "Year":"febrero 3 2020",
      "Precio":250000,
      "Puntos":3.3,
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9cfeYL428UlI8Gb-ds3WsSKiZJUawfejb4YpVdD9Xw&s"
    },

    {
      "productoId":2,
      "Modelo":'Rio',
      "Descripcion":"auto 4 puertas",
      "Marca":"Kia",
      "Year":"Marzo 24 2000",
      "Precio":35000,
      "Puntos":4.3,
      "ImagenUrl":"https://coches.com/fotos_historicas/kia/Rio-2000/kia_rio_r1.jpg"
    },

    {
      "productoId":3,
      "Modelo":'March',
      "Descripcion":"auto 2 puertas",
      "Marca":"Nissan",
      "Year":"Marzo 24 2010",
      "Precio":150000,
      "Puntos":3.0,
      "ImagenUrl":"https://noticias.coches.com/wp-content/uploads/2014/07/nissan_march-china-k13-2010_r3.jpg"
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
