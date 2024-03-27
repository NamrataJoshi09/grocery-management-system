import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}
  ShowNavbar():boolean{
    return !this.router.url.includes('login') && !this.router.url.includes('register') && !this.router.url.includes('admin') &&!this.router.url.includes('home1') && !this.router.url.includes('products')
    && !this.router.url.includes('updateproduct') && !this.router.url.includes('getproductdetails') && !this.router.url.includes('about')
    && !this.router.url.includes('contact1');
  }
}
