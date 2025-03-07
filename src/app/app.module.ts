import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicOutletModule } from './shared/dynamic-outlet/dynamic-outlet.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicOutletModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
