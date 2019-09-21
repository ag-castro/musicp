import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule {

  // Verifica se o CoreModule é carregado apenas em AppModule.
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule, já foi carregado. Importe o CoreModule apenas no AppModule.');
    }
  }

 }
