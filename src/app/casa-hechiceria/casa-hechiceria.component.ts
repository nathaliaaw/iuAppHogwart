import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-casa-hechiceria',
  templateUrl: './casa-hechiceria.component.html',
  styleUrls: ['./casa-hechiceria.component.css']
})
export class CasaHechiceriaComponent implements OnInit {  
  casa: string = ''  
  listaPersonajes: any = []



  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
 
  }
  consumirAPI() {    
    this.http.get('https://hp-api.herokuapp.com/api/characters/house/' + this.casa).subscribe(
      (data: Array<any>) => {
        this.listaPersonajes = data;
        this.listaPersonajes.forEach(element => {
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
