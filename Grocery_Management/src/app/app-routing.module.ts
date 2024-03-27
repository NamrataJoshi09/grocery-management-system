import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProductListComponent } from './modules/admin/components/product-list/product-list.component';
import { UpdateproductComponent } from './modules/admin/components/updateproduct/updateproduct.component';
import { ProductComponent } from './modules/admin/components/product/product.component';
import { ProductdetailsComponent } from './modules/admin/components/productdetails/productdetails.component';
import { ContactComponent } from './contact/contact.component';
import { Home1Component } from './home1/home1.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { GetproductComponent } from './modules/admin/components/getproduct/getproduct.component';
import { Contact1Component } from './modules/admin/components/contact1/contact1.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'home1',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'adminboard',
  loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule),},
  {path:'productlist',component:ProductListComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'products',component:ProductComponent},
  {path:'home1',component:Home1Component},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'getproductdetails/:id',component:GetproductComponent},
  {path:'contact',component:ContactComponent},
  {path:'contact1',component:Contact1Component},
  {path:'cart',component:CartPageComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
