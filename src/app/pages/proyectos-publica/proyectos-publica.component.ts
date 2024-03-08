import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DetalleProyectos} from '../../card.model'

@Component({
  selector: 'app-proyectos-publica',
  standalone: true,
  imports: [],
  templateUrl: './proyectos-publica.component.html',
  styleUrl: './proyectos-publica.component.scss',

})
export class ProyectosPublicaComponent {

detalleProyecto: DetalleProyectos | undefined;


proyectos: DetalleProyectos[]  = [
{
  id: 1,
  nombre: 'proyecto1',
  texto: 'aaaaaaaaa'
},

{
  id: 2,
  nombre: 'proyecto2',
  texto: 'bbbbbbbbb'
},
  ]

  constructor(private rutaActiva: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.rutaActiva.params.subscribe((params: Params)=> {
        this.detalleProyecto = this.proyectos.find((proyecto) => proyecto.nombre === params['proyecto']) 
       
    })
  
  }

}


