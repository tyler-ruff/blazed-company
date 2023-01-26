import { Component, OnInit } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/app.service';

import { page } from './directory.page';
import { Website } from 'src/app/models/website.model';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  public page = page;
  
  directory$: Observable<Website[]>;
  constructor(private appService: AppService, firestore: Firestore) { 
    appService.setPage(page);
    const col = collection(firestore, 'Directory');
    this.directory$ = collectionData(col) as Observable<Website[]>;
  }

  ngOnInit(): void {
  }

}
