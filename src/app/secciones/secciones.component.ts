import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService } from '../servicios/servicio-general.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {
  imagesrc = '../assets/images/gif_escudo.gif';
  constructor(private servicioGenral:ServicioGeneralService) { }

  ngOnInit(): void {
  }
  

}
