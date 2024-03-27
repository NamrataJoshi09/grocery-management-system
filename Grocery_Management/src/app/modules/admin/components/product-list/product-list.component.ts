import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  abc: any;
  public getproduct: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private productService: ProductsService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data)
      this.getproduct=data;
    })
  }

  goToProduct(id:any){
    this.router.navigate(["productdetails" , id]);
  }
 
}
