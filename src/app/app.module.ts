import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cabezeraComponent } from './cabezera/cabezera.components';
import { contenedor2Component } from './contenedorL/contenedorL.components';
import { contenedor1Component } from './contenedorR/contenedorR.components';
import { contenedor3Component } from './contenedorB/contenedorB.components';

@NgModule({
  declarations: [
    AppComponent,
    cabezeraComponent,
    contenedor1Component,
    contenedor2Component,
    contenedor3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
