import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from "./header.component";
import { NavComponent } from '../components/nav/nav.component';

import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Header',
    decorators: [
        moduleMetadata({
            declarations: [
                HeaderComponent,
                NavComponent
            ],
            imports: [ 
                BrowserModule
            ]
        }),
    ],
};
export const Main = () => ({
    template: `
        <app-header></app-header>
    `
});