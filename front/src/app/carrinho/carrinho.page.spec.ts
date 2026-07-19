import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { carrinhoPage } from './carrinho.page';

describe('carrinhoPage', () => {
  let component: carrinhoPage;
  let fixture: ComponentFixture<carrinhoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [carrinhoPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(carrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
