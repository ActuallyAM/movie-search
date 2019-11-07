import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, HomeComponent, DetailComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
	providers: [ AppService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
