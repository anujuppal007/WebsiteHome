import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
