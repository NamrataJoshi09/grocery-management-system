import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule} from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { GetproductComponent } from './components/getproduct/getproduct.component';
import { Contact1Component } from './components/contact1/contact1.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddproductComponent,
    ProductListComponent,
    ProductComponent,
    UpdateproductComponent,
    ProductdetailsComponent,
    GetproductComponent,
    Contact1Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FormsModule,
    
  ]
})
export class AdminModule { }
