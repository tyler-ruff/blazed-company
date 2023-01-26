import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

import { page } from './contact.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public page = page;

  selectedPurpose = '';

  showContact = true;
  showSales = false;
  showSupport = false;

  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void { }

  public selectBox(values: any): void{
    this.selectedPurpose = values.currentTarget.value;
    if(this.selectedPurpose === 'sales' || this.selectedPurpose === 'support'){
      this.showContact = false;
      if(this.selectedPurpose === 'sales'){
        this.showSales = true;
      } else if(this.selectedPurpose === 'support'){
        this.showSupport = true;
      }
    }
  }
  public goBack(): void{
    this.showSales = false;
    this.showSupport = false;
    this.showContact = true;
  }
  public sendMessage(values: any, form: any): void{
    form.submit();
  }

}
