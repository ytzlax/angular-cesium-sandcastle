import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { PolygonLayerComponent } from './components/polygon-layer/polygon-layer.component';
import { PlaneLayerComponent } from './components/plane/plane.component';
import { PolylineLayerComponent } from './components/polyline-layer/polyline-layer.component';

@NgModule({
  declarations: [
    AppComponent,PolygonLayerComponent,PlaneLayerComponent,PolylineLayerComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
