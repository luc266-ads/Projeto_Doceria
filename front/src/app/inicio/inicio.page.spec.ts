import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inicioPage } from './inicio.page';

describe('inicioPage', () => {
  let component: inicioPage;
  let fixture: ComponentFixture<inicioPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(inicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
