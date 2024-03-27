import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { Cart } from '../modules/Cart';
import { CartItem } from '../modules/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x:string]:any;
  private cart:Cart=new Cart();
  addToCart(product:Product):void{
    /*let cartItem=this.cart.items.find(item => item.product.id === product.id)
    if(cartItem){
     // this.changeQuantity(  product.id, cartItem.quantity +1 );
      return;
    }*/
    this.cart.items.push(new CartItem(product));
  }
  removeFromCart(productId: number):void{
    this.cart.items = this.cart.items.filter(item => item.product.id != productId)
  }
 /* changeQuantity(quantity: number, productId:number){
    let cartItem= this.cart.items.find(item => item.product.id === productId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }*/
  getCart():Cart{
 return this.cart;
  }
  items:Product[]=[];
  constructor(){}
}
