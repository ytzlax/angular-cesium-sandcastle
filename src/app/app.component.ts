import { Component } from '@angular/core';
import { MapsManagerService } from 'angular-cesium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-cesium-sandcastle';
  showPolygon = true;
  showPlane = true;
  showPolyline = true;
  constructor(public mapManager: MapsManagerService) {
    setTimeout(() => {
      mapManager.getMap().getCesiumViewer().scene.morphTo2D(0);

    }, 500)
  }
}
