import { Component, OnInit } from '@angular/core';
import { Config } from 'fire-ng/lib/interfaces/config';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent implements OnInit {

  public app: Config;
  constructor(appService: AppService) { 
    const config = appService.getConfig();
    this.app = config.app;
  }

  ngOnInit(): void {
  }

}
