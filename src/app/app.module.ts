import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FieldsComponent } from './fields/fields.component';
import { ServicesComponent } from './services/services.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }, // المسار الافتراضي
  { path: 'products', component: ProductComponent },
  { path: 'fields', component: FieldsComponent },
  {path:'our-work', component:OurWorkComponent},
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '' , pathMatch:'full'} // في حالة وجود مسار غير صحيح، إعادة المستخدم للصفحة الرئيسية
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    FieldsComponent,
    ServicesComponent,
    OurWorkComponent,
    TestmonialComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
