import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import * as moment from 'moment';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent implements OnInit {

  listaPersonajes: any = []
  formSolicitud: FormGroup;
  nombresApellidos: string = ''
  patronus: string = ''
  urlFoto: string = ''
  maxDate = new Date();
  errorModal: string = 'Los datos estan incompletos por favor validar...'

  constructor(private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.consumirAPIestdiante()
    this.formSolicitud = new FormGroup({

      nombresApellidos: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      patronus: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
    });
  }
  consumirAPIestdiante() {
    this.http.get('http://hp-api.herokuapp.com/api/characters/students').subscribe(
      (data: Array<any>) => {
        this.listaPersonajes = data;
        this.calcularEdad()
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
  open(content) {
    this.modalService.open(content);
  }

  calcularEdad() {
    this.listaPersonajes.forEach(element => {
      if (element.dateOfBirth != '') {
        element.Age = moment().diff(moment(element.dateOfBirth, "DD-MM-YYYY"), 'years');
      }
      else {
        element.Age = ''
      }
    });
  }
  guardarInfo(content) {
    if (this.formSolicitud.invalid) {
      // this.servicioGeneral.MostrarModal('Error', ' Por favor ingresar todos los datos', 'error', 'Aceptar')
      return;
    }

    var objeto: any = []
    console.log((moment(this.formSolicitud.value.edad, "DD-MM-YYYY")))

    objeto = {
      name: this.formSolicitud.value.nombresApellidos,
      patronus: this.formSolicitud.value.patronus,
      image: this.formSolicitud.value.urlFoto,
      dateOfBirth: moment(this.formSolicitud.value.edad).format("DD-MM-YYYY"),
    }
    this.listaPersonajes.push(objeto)
    this.calcularEdad();
    this.modalService.dismissAll(content);
    this.limpiarCampos();

  }
  limpiarCampos() {
    this.formSolicitud.reset()
  }


}
