import { Component, OnInit } from '@angular/core';

import { Config } from '../../../data/config';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent implements OnInit {

  email = Config.email;
  phone = Config.telephone;

  constructor() { }

  ngOnInit(): void {
  }

}
