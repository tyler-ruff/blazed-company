import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor() { 
   window.location.href = 'https://blazed.sbs/books/BlazedBrandBook-1-0.pdf';  
  }

  ngOnInit(): void {
  }

}
