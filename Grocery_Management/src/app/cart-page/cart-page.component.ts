import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../modules/Cart';
import { CartItem } from '../modules/CartItem';


declare var Razorpay:any;
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
cart!:Cart;
constructor(private cartService: CartService){

  this.setCart();
}
ngOnInit():void{
}
setCart() {
  this.cart = this.cartService.getCart();
}
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.product.id);
  this.setCart();
}
validateInput(event:any, i:number){
  const quantity=+event.target.value;
  if(quantity<1){
    event.target.value =this.cart.items[i].quantity;
    return;
  }
  this.QtyUpdated(quantity, i)
}
QtyUpdated(quantity:number, i:number){
  this.cart.items[i].quantity=quantity;
 
}



payNow(){
 const RazorpayOptions={
        description:'Sample Razorpay demo',
        currency:'INR',
        amount:this.cart.totalPrice*100,
        name:'Namrata Joshi',
        key: 'rzp_test_thRNjcmJETmqoo',
        image:'https://w7.pngwing.com/pngs/596/349/png-transparent-india-independence-day-indian-flag.png',
        prefills:{
          name:'Namrata Joshi',
          email:'namratarjoshi09@gmail.com',
          phone:'8767099103'
        },
        theme:{
          color:'#f37254'
        },
        modal:{
          ondismiss:()=>{
            console.log('dismissed')
          }
        }
      }
      const successCallback= (paymentid:any)=>{
        console.log(paymentid);
      }
      const failureCallback=(e:any)=>{
        console.log(e);
      }
      Razorpay.open(RazorpayOptions,successCallback,failureCallback)
      };
}
