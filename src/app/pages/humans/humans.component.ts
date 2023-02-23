import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

import { Config } from 'fire-ng/lib/interfaces/config';

import { page } from './humans.page';

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
})
export class HumansComponent implements OnInit {
  public app: Config;

  constructor(private appService: AppService) { 
    appService.setPage(page);
    let conf = appService.getConfig();
    this.app = conf.app;
    window.location.href = this.app.author;  
  }

  ngOnInit(): void {
  }

}