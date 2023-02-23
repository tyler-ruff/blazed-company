import { Component, OnInit } from '@angular/core';
import { Config } from 'fire-ng/lib/interfaces/config';
import { AppService } from 'src/app/shared/app.service';
import { DataConfig, data } from 'src/config/data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

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
