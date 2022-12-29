import { Component, OnInit } from '@angular/core';

import { Config } from '../../../data/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = Config.logo;
  siteName = Config.name;
  constructor() { }

  burgerVisible: boolean = false;

  ngOnInit(): void {
  }

}
