import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/modules/product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 product:Product=new Product();
 submit=false;
  constructor(private productService:ProductsService,private router:Router)
  {}
  ngOnInit(): void {
 
  }
 
/*
  ngOnInit() {
    // Initialize the form with FormBuilder
    this.productform = this.fb.group({
      categoryName: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]]
    });
  }*/
  saveProduct()
  {
    this.productService['createProduct'](this.product).subscribe((data: any)=>
    {
      console.log(data);
      alert("Product added Successfully");
      this.router.navigate(['/products']);
     
    },
    (error:any)=>console.log(error)
    );
  }
  OnSubmit()
  {
       
    console.log(this.product);
    this.saveProduct();
  }
  goback(){
    this.router.navigate(['/adminboard']);
  }
 }

