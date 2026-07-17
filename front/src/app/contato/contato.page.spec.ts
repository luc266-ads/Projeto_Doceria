import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contatoPage } from './contato.page';

describe('contatoPage', () => {
  let component: contatoPage;
  let fixture: ComponentFixture<contatoPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(contatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
