import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RatingModule} from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
