import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 200
  }
 


  constructor() {


  }
}
