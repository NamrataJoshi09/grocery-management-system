import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products!:Product[];
  constructor(private productService:ProductsService,private router:Router)
  {}
  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts()
  {
    this.productService.getProductList().subscribe(data=>
      {
        this.products=data;
      });
    }
    productDetails(id:number)
    {
      this.router.navigate(['getproductdetails',id]);
    }
    updateProduct(id:number)
    {
      this.router.navigate(['updateproduct',id]);
    }
    deleteProduct(id:number)
    {
      this.productService.deleteProduct(id).subscribe((data:any)=>
        {
          console.log(data);
        });
          alert("Deleted Successfully");
          this.getProducts();
        
    }
    
}
