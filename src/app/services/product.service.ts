import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartRequest } from '../models/cart-request';
import { map, Observable } from 'rxjs';
import { CustomeHttpResponse } from '../models/custom-response';
import { OrderRequest } from '../models/order-request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:8222/api/v1/products", {observe: 'response'})
  }

  getProductDetails(id : number) {
    return this.http.get("http://localhost:8222/api/v1/products/"+id, {observe: 'response'})
  }

  public addToCart(cartRequest: CartRequest): Observable<CustomeHttpResponse> {
    return this.http.post<CustomeHttpResponse>("http://localhost:8222/api/v1/products/cart", cartRequest);
    
  }

  getCart(customerId: string) {
    return this.http.get("http://localhost:8222/api/v1/products/cart/"+customerId, {observe: 'response'})
  }

  public createOrder(orderRequest: OrderRequest): Observable<CustomeHttpResponse> {
    return this.http.post<CustomeHttpResponse>("http://localhost:8222/api/v1/orders", orderRequest);
    
  }


}
