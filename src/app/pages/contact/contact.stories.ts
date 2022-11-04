import { BrowserModule } from '@angular/platform-browser';

import { ContactComponent } from "./contact.component";

import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Contact',
    decorators: [
        moduleMetadata({
            declarations: [
                ContactComponent
            ],
            imports: [ 
                BrowserModule,
            ]
        }),
    ],
};
export const Main = () => ({
    template: `
        <app-contact></app-contact>
    `
});