import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  constructor(public _router: Router) { }

  NavegarMenuRouter(path) {
    //funcion para navegar dentro de la aplicacion
    this._router.navigate(['/',
      {
        outlets: {
          contenedorPrincipal: path
        }
      }
    ])    
  }

}
