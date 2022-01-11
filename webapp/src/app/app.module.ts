import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './core/layout/layout.module';
import { CommonModule } from '@angular/common';
import { environment } from '@env/environment.prod';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(AppRoutes, {
      enableTracing: false
    })
  ],
  exports: [
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
