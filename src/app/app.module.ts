import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { PolygonLayerComponent } from './components/polygon-layer/polygon-layer.component';

@NgModule({
  declarations: [
    AppComponent,PolygonLayerComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
