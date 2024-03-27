// Import necessary modules
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit {

  registerform!: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient,private router:Router) { }

  ngOnInit() {
    // Initialize the form with FormBuilder
    this.registerform = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      address:['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  
    });
  }

  // Custom validator function for password matching
 

  // Function to handle form submission
  onSubmit() {
    if (this.registerform.valid) {
      // Send the form data to the server using HttpClient
      const registerData = this.registerform.value;

      this.http.post("http://localhost:8080/api/customers/register",registerData,
      {
        responseType:'text'}).subscribe((resultData:any)=>
        {
          console.log(resultData);
          alert("Registered Successfully");
          this.router.navigate(['/login']);
        })
    }
  }

  
  
}
/*
export class RegisterComponent {
firstname:String="";
lastName:String="";
gender:string="";
address:String="";
email:String="";
password:String="";
constructor(private http:HttpClient){}
save()
{
  let bodyData={
    "firstname":this.firstname,
    "lastName":this.lastName,
    "gender":this.gender,
    "address":this.address,
    "email":this.email,
    "password":this.password
  
  };

  /*
  this.http.post("http://localhost:8080/api/customers/register",bodyData,
  {
    responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Registered Successfully")
    })
}
}*/
