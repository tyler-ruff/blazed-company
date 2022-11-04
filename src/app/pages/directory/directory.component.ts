import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Website {
  name: string,
  url: string,
  desc: string
};

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  directory$: Observable<Website[]>;
  constructor(firestire: Firestore) { 
    const col = collection(firestire, 'Directory');
    this.directory$ = collectionData(col) as Observable<Website[]>;
  }

  ngOnInit(): void {
  }

}
