import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/products/dto/product.dto';
import { API } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  http = inject(HttpClient);
  getProducts(n:number): Observable<Product[]> {
    return this.http.get<{products : Product[]}>(`${API.products}?limit=${n}`).pipe(
      map((response)=> response.products)
    );
  }
}
