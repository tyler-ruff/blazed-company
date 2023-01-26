import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/app.service';

import { page } from './divisions.page';
import { Division } from 'src/app/models/division.model';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {

  public page = page;
  divisions$: Observable<Division[]>;

  constructor(private appService: AppService, firestire: Firestore) {
    appService.setPage(page);
    const col = collection(firestire, 'Divisions');
    this.divisions$ = collectionData(col) as Observable<Division[]>;
   }

  ngOnInit(): void {
  }

}
