import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageDataComponent } from './local-storage-data/local-storage-data.component';
import { HttpClientModule } from "@angular/common/http";
import { ClarabellaComponent } from './clarabella/clarabella.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalStorageDataComponent,
    ClarabellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
