import { BrowserModule } from '@angular/platform-browser';

import { DirectoryComponent } from "./directory.component";

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';

export default {
    title: 'Directory',
    decorators: [
        moduleMetadata({
            declarations: [
                DirectoryComponent
            ],
            imports: [ 
                BrowserModule,
                CommonModule,
                provideFirebaseApp(() => initializeApp(environment.firebase)),
                provideAuth(() => getAuth()),
                provideFirestore(() => getFirestore()),
                provideFunctions(() => getFunctions()),
                provideStorage(() => getStorage())
            ]
        }),
    ],
};
export const Main = () => ({
    template: `
        <app-directory></app-directory>
    `
});