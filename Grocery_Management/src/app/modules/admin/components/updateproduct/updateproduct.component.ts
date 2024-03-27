import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit{
  id!:number;
  product:Product=new Product();
  constructor(private productService:ProductsService,private route:ActivatedRoute,private router:Router)
{}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.productService['getProductById'](this.id).subscribe((data:Product)=>
  {
    this.product=data;
  },(error:any)=>console.log(error));
  }
  OnSubmit()
  {
    this.productService['updateProduct'](this.id,this.product).subscribe((data:any)=>{
     alert("Updated successfully")
      this.goToProductList();
    },(error:any)=>console.log(error));
  
  }

  goToProductList()
  {
    this.router.navigate(['/products']);
  } 
  goback(){
    this.router.navigate(['/products']);
  }
}
