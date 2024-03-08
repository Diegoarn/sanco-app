import { Component } from '@angular/core';
import {Proyecto} from '../../card.model';
import { CardComponent } from '../../card/card.component';
import { NgFor} from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-publica',
  standalone: true,
  imports: [CardComponent, NgFor, RouterLink,RouterOutlet],
  templateUrl: './publica.component.html',
  styleUrl: './publica.component.scss'
})
export class PublicaComponent {
  proyectos: Proyecto[] = [
    {
      id: 1,
      imagen: '../../../assets/nicosia/cam2.jpg',
      nombre: 'proyecto1'
    },
    {
      id: 2,
      imagen: '../../../assets/nicosia/cam2.jpg',
      nombre: 'proyecto2'
    }

  ]
}

