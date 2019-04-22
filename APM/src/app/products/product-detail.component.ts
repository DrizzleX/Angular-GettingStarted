import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    // + converts string to number
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(
      products => {
        for (var i = 0; i < products.length; i++) {
          if (products[i].productId == id) {
            this.product = products[i];
            break;
          }
        }
        // if there is no such product in the retrived products
      },
      // <any>error is casting, cast the error to any type
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
