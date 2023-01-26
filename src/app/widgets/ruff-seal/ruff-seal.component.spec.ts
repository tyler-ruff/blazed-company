import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuffSealComponent } from './ruff-seal.component';

describe('RuffSealComponent', () => {
  let component: RuffSealComponent;
  let fixture: ComponentFixture<RuffSealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuffSealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuffSealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
