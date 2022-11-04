import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  showBox: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public closeMessage(): void{
    this.showBox = false;
  }

}
