import { BrowserModule } from '@angular/platform-browser';

import { HeroComponent } from "./../hero/hero.component";

import { moduleMetadata } from '@storybook/angular';
import { FeaturesComponent } from '../features/features.component';
import { ContactCtaComponent } from '../contact-cta/contact-cta.component';

export default {
    title: 'Home',
    decorators: [
        moduleMetadata({
            declarations: [
                HeroComponent,
                FeaturesComponent,
                ContactCtaComponent
            ],
            imports: [ 
                BrowserModule
            ]
        }),
    ],
};
export const Hero = () => ({
    template: `
        <app-hero></app-hero>
    `
});

export const Features = () => ({
    template: `
        <app-features></app-features>
    `
});

export const ContactCTA = () => ({
    template: `
        <app-contact-cta></app-contact-cta>
    `
});