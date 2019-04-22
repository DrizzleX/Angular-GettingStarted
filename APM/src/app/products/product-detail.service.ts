import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root' // this is new in Angular 6, and this service is avaialbe through out the whole application
})
export class ProductDetailService {
    /*
    there is no data member, so we are not using this service
    to share data
    */

    // private productUrl = 'http://127.0.0.1:5000/api/products';
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProductDetail(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is :${err.message}`
        }
        console.error(errorMessage)
        return throwError(errorMessage);
    }
    

}