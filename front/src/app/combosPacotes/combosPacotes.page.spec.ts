import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosPacotesPage } from './combosPacotes.page';

describe('combosPacotesPage', () => {
  let component: CombosPacotesPage;
  let fixture: ComponentFixture<CombosPacotesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(CombosPacotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
