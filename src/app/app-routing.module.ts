import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CasaHechiceriaComponent } from './casa-hechiceria/casa-hechiceria.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';


const routes: Routes = [
  { path: '', component: CasaHechiceriaComponent },
  { path: 'secciones', component: SeccionesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'casas', component: CasaHechiceriaComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'estudiantes', component: EstudiantesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
