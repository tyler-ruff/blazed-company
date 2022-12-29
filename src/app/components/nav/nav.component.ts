import { Component, OnInit } from '@angular/core';

import { Config } from '../../../data/config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menu = Config.menu;
  constructor() { }

  ngOnInit(): void {
  }

}
