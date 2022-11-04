import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from "./about.component";

import { moduleMetadata } from '@storybook/angular';
import { FeaturesComponent } from '../../components/features/features.component';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta.component';

export default {
    title: 'About',
    decorators: [
        moduleMetadata({
            declarations: [
                AboutComponent
            ],
            imports: [ 
                BrowserModule
            ]
        }),
    ],
};
export const Main = () => ({
    template: `
        <app-about></app-about>
    `
});