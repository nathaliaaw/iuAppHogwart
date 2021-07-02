import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  listaProfesores: any = [];
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.consumirAPIProfesoras()
  }

  consumirAPIProfesoras() {
    this.http.get('http://hp-api.herokuapp.com/api/characters/staff' ).subscribe(
      (data: Array<any>) => {
        this.listaProfesores = data;
        this.listaProfesores.forEach(element => {
          if (element.dateOfBirth != '') {
            element.Age = moment().diff(moment(element.dateOfBirth, "DD-MM-YYYY"), 'years');
          }
          else {
            element.Age = ''
          }
        });
      }, error => {
        console.log(error);
      });
  }

}
