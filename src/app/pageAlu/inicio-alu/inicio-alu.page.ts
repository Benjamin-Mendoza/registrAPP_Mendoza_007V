import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-alu',
  templateUrl: './inicio-alu.page.html',
  styleUrls: ['./inicio-alu.page.scss'],
})
export class InicioAluPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
