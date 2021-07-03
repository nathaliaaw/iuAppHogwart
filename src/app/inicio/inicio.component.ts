import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService } from '../servicios/servicio-general.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public servicioGenral: ServicioGeneralService) { }

  ngOnInit(): void {
    this.navegar('secciones')

  }
  navegar(path) {
    this.servicioGenral.NavegarMenuRouter(path)
  }

}
