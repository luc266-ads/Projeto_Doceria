import { TestBed } from '@angular/core/testing';
import { carrinhoService } from './carrinhoService';

describe('Carrinho', () => {
  let service: carrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(carrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
