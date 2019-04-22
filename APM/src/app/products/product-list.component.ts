import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    // template: `
    // <h1>
    //   hello
    // </h1>
    // <p>
    //   This is your new homepage
    // </p>
    // `,
    styleUrls: ['./product-list.component.css'],
    // providers: [ProductService] // the old way. make ProductService available in this component
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        // logic for things we need to do whenever the value is changed
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    /*
    private _productService;
    constructor(productService: ProductService) {
    this._productService = productService;
    }
    */
   // the constructor parameter is a shorthand for code above
    constructor(private productService: ProductService) {
        /*
        constructor should be as short as possible
        so we should not put code like below
        this.products = this.productService.getProducts();
        */
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            // <any>error is casting, cast the error to any type
            error => this.errorMessage = <any>error
        );
        
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
