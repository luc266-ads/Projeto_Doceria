import { ComponentFixture, TestBed } from '@angular/core/testing';

import { enderecoPage } from './endereco.page';

describe('enderecoPage', () => {
  let component: enderecoPage;
  let fixture: ComponentFixture<enderecoPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(enderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
