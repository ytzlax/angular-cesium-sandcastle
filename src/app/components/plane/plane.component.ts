import { from as observableFrom, Observable, Subject } from 'rxjs';

import { merge } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AcEntity, AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';

@Component({
  selector: 'plane-layer',
  templateUrl: 'plane.component.html',
})
export class PlaneLayerComponent implements OnInit {
  @ViewChild(AcLayerComponent, { static: true }) layer: AcLayerComponent;

  planes$: Observable<AcNotification>;
  show = true;
  updater = new Subject<AcNotification>();

  ngOnInit() {

    this.planes$ = observableFrom([
      {
        id: '0',
        entity: new AcEntity({
          // image: "/assets/GitHub-Mark-Light.png",
          image: "/assets/fighter-jet.png",
          scale: 0.1,
          position: Cesium.Cartesian3.fromDegrees(-115.0, 37.0, 10),
          color:Cesium.Color.RED,          
        }),
        actionType: ActionType.ADD_UPDATE
      }

    ]).pipe(merge(this.updater));


  }
}
