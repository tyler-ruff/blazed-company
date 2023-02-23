import { Component, OnInit } from '@angular/core';
import { Config } from 'fire-ng/lib/interfaces/config';

import { DataConfig, data } from 'src/config/data';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'blz-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public app: Config;
  public data: DataConfig

  constructor(private appService: AppService) {
    const config = appService.getConfig();
    this.app = config.app;
    this.data = data;
   }

  ngOnInit(): void {
  }

}
