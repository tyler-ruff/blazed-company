import { Component, OnInit } from '@angular/core';
import { Config } from 'fire-ng/lib/interfaces/config';
import { AppService } from 'src/app/shared/app.service';

import { DataConfig, data } from 'src/config/data';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent implements OnInit {

  public app: Config;
  public data: DataConfig
  constructor(appService: AppService) { 
    const config = appService.getConfig();
    this.app = config.app;
    this.data = data;
  }

  ngOnInit(): void {
  }

}
