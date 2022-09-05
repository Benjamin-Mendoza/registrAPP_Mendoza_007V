import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion-alu',
  templateUrl: './inicio-sesion-alu.page.html',
  styleUrls: ['./inicio-sesion-alu.page.scss'],
})
export class InicioSesionAluPage implements OnInit {

  

  usuario = {
    email: '',
    password: ''
  };

  miModelo: any;

  constructor() {
    this.miModelo = {};
   }


  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form submit');
    console.log( this.usuario );
  }

}