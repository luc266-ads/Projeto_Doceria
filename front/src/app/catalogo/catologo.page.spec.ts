import { ComponentFixture, TestBed } from '@angular/core/testing';

import { catalogoPage } from './catalogo.page';

describe('catalogoPage', () => {
  let component: catalogoPage;
  let fixture: ComponentFixture<catalogoPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(catalogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
