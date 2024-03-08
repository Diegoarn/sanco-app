import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PrivadaComponent } from './pages/privada/privada.component';
import { PublicaComponent } from './pages/publica/publica.component';
import { SingularesComponent } from './pages/singulares/singulares.component';
import { UnifamiliarComponent } from './pages/unifamiliar/unifamiliar.component';
import { NicosiaComponent } from './pages/proyectos-privada/nicosia/nicosia.component';
import { ProyectosPublicaComponent } from './pages/proyectos-publica/proyectos-publica.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'estudio',
        component: EstudioComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'privada',
        component: PrivadaComponent,  
    },
    {
        path: 'publica',
        component: PublicaComponent
    },
    {
        path: 'singulares',
        component: SingularesComponent
    },
    {
        path: 'unifamiliares',
        component: UnifamiliarComponent
    },
    {
        path: 'nicosia',
        component: NicosiaComponent

    },
    {
        path: 'proyectos-publica/:proyecto',
        component: ProyectosPublicaComponent

    },


    {
        path:'**',
        redirectTo: '',
    }
];
