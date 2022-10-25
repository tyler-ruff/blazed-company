import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from "./footer.component";

import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Footer',
    decorators: [
        moduleMetadata({
            declarations: [
                FooterComponent
            ],
            imports: [ 
                BrowserModule
            ]
        }),
    ],
};
export const Main = () => ({
    template: `
        <app-footer></app-footer>
    `
});