import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Proyecto} from '../../card.model'
import { CardComponent } from '../../card/card.component';
import { NgFor} from '@angular/common'

@Component({
  selector: 'app-privada',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CardComponent, NgFor],
  templateUrl: './privada.component.html',
  styleUrl: './privada.component.scss'
})
export class PrivadaComponent {
  proyectos: Proyecto[] = [
    {
      id: 1,
      imagen: '../../../assets/nicosia/cam2.jpg',
      nombre: 'nicosia'
    },
    {
      id: 2,
      imagen: '../../../assets/nicosia/cam2.jpg',
      nombre: 'proyecto2'
    }

  ]
}
