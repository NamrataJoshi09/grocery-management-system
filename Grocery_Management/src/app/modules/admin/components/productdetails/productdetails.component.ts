import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id!:number;
  product!:Product;
  constructor(private productService:ProductsService,private route:ActivatedRoute, private router: Router,
    private cartService:CartService)
  {}
  ngOnInit():void{
 this.id=this.route.snapshot.params['id'];
 this.product=new Product();
 this.productService['getProductById'](this.id).subscribe((data:Product)=>
 {
  this.product=data;
 })
 
  }
  addToCart(){
  this.cartService.addToCart(this.product);
  this.router.navigateByUrl('/cart')
  }
    
  }

  

    

