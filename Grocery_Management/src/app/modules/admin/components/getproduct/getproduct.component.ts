import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit{
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
  back(){
    this.router.navigate(['/products']);
  }
}
