import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header = {
    heading: 'My website',
    headingtext: 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
    buttontext: "do some action!",
    buttonlink: '\home'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
