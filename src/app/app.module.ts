import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductCollecComponent } from './product-collec/product-collec.component';
import {ProductService} from './services/product.service';
import {LoggingService} from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    ProductListComponent,
    ProductComponent,
    ProductCollecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
