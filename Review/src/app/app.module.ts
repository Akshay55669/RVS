import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgetpassComponent } from './user/forgetpass/forgetpass.component';
import { AddreviewComponent } from './pages/addreview/addreview.component';
import { ViewreviewComponent } from './pages/viewreview/viewreview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from './Services/review.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,
    AddreviewComponent,
    ViewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
