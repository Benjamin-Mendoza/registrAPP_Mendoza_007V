import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  img:string;

  constructor() { }

  ngOnInit() {
    this.img = 'https://www.youniforms.cl/wp-content/uploads/2020/01/DUOC.png';
  }

}
