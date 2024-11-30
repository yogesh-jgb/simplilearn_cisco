import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product, ProductInfo } from "./product";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    public saveProduct(product: Product): Observable<any> {
        const url = 'https://reqres.in/api/products';
        return this.http.post<any>(url, product);
    }

    public saveProductTyped(product: Product): Observable<ProductInfo> {
        const url = 'https://reqres.in/api/products';
        return this.http.post<ProductInfo>(url, product);
    }
}
