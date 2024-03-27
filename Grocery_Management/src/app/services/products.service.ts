import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseURL="http://localhost:8080/api/products";
  constructor( private httpClient:HttpClient) { }
 public  getProductList():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
}
public createProduct(product:Product):Observable<Object>
{
  return this.httpClient.post(`${this.baseURL}`,product);
}
public getProductById(id:number):Observable<Product>
{
  return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
}
public updateProduct(id:number,product:Product):Observable<Object>
{
  return this.httpClient.put(`${this.baseURL}/${id}`,product);
}
public deleteProduct(id:any):Observable<Object>
{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
 
    
  
