import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',// nos permite crear una pagina principal
  styleUrls: ['./app.component.css'] //aqui tambien podemos darle estilos a la pagina
})
export class AppComponent {
  title = 'ejemplo-Angular';
  nombre:string='Dalia Vengas'
  escuela:string='UTL'
}
