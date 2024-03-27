import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  userName:string="";
  password:string="";
  constructor(private router:Router,private http:HttpClient){}
  login()
  {
    console.log(this.userName);
    console.log(this.password);
    let bodyData=
    {
      userName:this.userName,
      password:this.password
    };
  
  this.http.post("http://localhost:8080/api/admins/login",bodyData).subscribe((resultData:any)=>
  {
    console.log(resultData);
    if(resultData.message=="UserName Not Exist")
    {
      alert("UserName Not Exist");
    }
    else if(resultData.message=="Login Success")
    {
      this.router.navigateByUrl('/adminboard');
    }
    else{
      alert("Incorrect UserName and Password");
    }
  })
  }
  back(){
    this.router.navigate(['home1']);
  }
}
