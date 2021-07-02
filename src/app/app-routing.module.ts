import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CasaHechiceriaComponent } from './casa-hechiceria/casa-hechiceria.component';


const routes: Routes = [
  { path: '', component: CasaHechiceriaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
