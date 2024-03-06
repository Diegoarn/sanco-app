import { Component, Input } from '@angular/core';
import {Proyecto} from '../card.model'


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() proyecto!: Proyecto;
}
