import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

import { page } from './brand.page';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private appService: AppService) { 
    appService.setPage(page);
    window.location.href = 'https://blazed.sbs/books/BlazedBrandBook-1-0.pdf';  
  }

  ngOnInit(): void {
  }

}
