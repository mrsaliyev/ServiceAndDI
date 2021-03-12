import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollecComponent } from './product-collec.component';

describe('ProductCollecComponent', () => {
  let component: ProductCollecComponent;
  let fixture: ComponentFixture<ProductCollecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCollecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCollecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
