import { Component, OnInit } from '@angular/core';

import { Config } from '../../../data/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public year: string = new Date().getFullYear().toString();
  social = Config.social;
  constructor() { }

  ngOnInit(): void {
  }

}
