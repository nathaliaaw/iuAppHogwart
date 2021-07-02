import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CasaHechiceriaComponent } from './casa-hechiceria/casa-hechiceria.component';
import { AppRoutingModule } from './app-routing.module';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';


@NgModule({
  declarations: [
    AppComponent,
    CasaHechiceriaComponent,
    InicioComponent,
    SeccionesComponent,
    PlantillaComponent,
    ProfesoresComponent,
    EstudiantesComponent,
    
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,ReactiveFormsModule,
    FormsModule , NgbModule,
    HttpClientModule,
       
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
