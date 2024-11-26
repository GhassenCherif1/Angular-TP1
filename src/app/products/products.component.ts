import { Component } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { ProductApiResponse } from "./dto/product-api-response.dto";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  private loadMoreSubject = new BehaviorSubject<void>(undefined);
  private limit = 12;
  private skip = 0;

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.loadMoreSubject.pipe(
      concatMap(() =>
        this.productService
          .getProducts({ limit: this.limit, skip: this.skip })
          .pipe(map((response: ProductApiResponse) => response.products))
      ),
      takeWhile((newProducts) => newProducts.length > 0, true),
      scan((allProducts: Product[], newProducts: Product[]) => [...allProducts, ...newProducts], [] as Product[])
    );
  }

  onClick() {
    this.skip += this.limit;
    this.loadMoreSubject.next();
  }
}