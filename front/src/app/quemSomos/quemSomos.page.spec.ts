import { ComponentFixture, TestBed } from '@angular/core/testing';

import { quemSomosPage } from './quemSomos.page';

describe('quemSomosPage', () => {
  let component: quemSomosPage;
  let fixture: ComponentFixture<quemSomosPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(quemSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
