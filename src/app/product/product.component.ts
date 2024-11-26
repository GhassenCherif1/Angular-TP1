import { Component, inject } from '@angular/core';
import { ProductService } from './service/product.service';
import { Observable } from 'rxjs';
import { Product } from '../products/dto/product.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  n : number = 12;
  products$: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts(this.n);
  }
  onClick(){
    this.n+=12;
    this.products$ = this.productService.getProducts(this.n);
  }
}
