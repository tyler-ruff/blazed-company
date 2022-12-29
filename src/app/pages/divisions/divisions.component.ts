import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Division{
  id: number,
  name: string,
  description: string,
  url: string
};

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {
  divisions$: Observable<Division[]>;

  constructor(firestire: Firestore) {
    const col = collection(firestire, 'Divisions');
    this.divisions$ = collectionData(col) as Observable<Division[]>;
   }

  ngOnInit(): void {
  }

}
