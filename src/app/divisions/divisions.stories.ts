import { BrowserModule } from '@angular/platform-browser';

import { DivisionsComponent } from "./divisions.component";

import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Divisions',
    decorators: [
        moduleMetadata({
            declarations: [
                DivisionsComponent
            ],
            imports: [ 
                BrowserModule,
            ]
        }),
    ],
};
export const Main = () => ({
    template: `
        <app-divisions></app-divisions>
    `
});