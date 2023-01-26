import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

import { page } from './newsletter.page';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public page = page;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }


  ngOnInit(): void {
  }

}
