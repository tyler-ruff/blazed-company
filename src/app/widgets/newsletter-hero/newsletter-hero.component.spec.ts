import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterHeroComponent } from './newsletter-hero.component';

describe('NewsletterHeroComponent', () => {
  let component: NewsletterHeroComponent;
  let fixture: ComponentFixture<NewsletterHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
