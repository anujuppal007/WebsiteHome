import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent {

  title = 'Anuj Uppal';

  check1 : boolean = true;
  // const navMenu = document.getElementById("nav-menu");
  // const toggleMenu = document.getElementById("nav-toggle");
  // const closeMenu = document.getElementById("nav-close");


  navManuClick(){
    console.log('hila')
    this.check1 = !this.check1
  }

  navCloseClick(){
    console.log('hila2')
    this.check1 = !this.check1
  }

  // toggleMenuClick(){
  //   console.log('hila')
  //   this.check1 = !this.check1
  // }

  oh_yeah(eve){
    // console.log(eve);
  }
}
