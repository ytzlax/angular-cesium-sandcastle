import { from as observableFrom, Observable, Subject } from 'rxjs';

import { merge } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AcEntity, AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';

@Component({
  selector: 'polyline-layer',
  templateUrl: 'polyline-layer.component.html',
})
export class PolylineLayerComponent implements OnInit {
  @ViewChild(AcLayerComponent, { static: false }) layer: AcLayerComponent;

  polylines$: Observable<AcNotification>;
  show = true;
  updater = new Subject<AcNotification>();

  constructor() {
  }

  ngOnInit() {



    this.polylines$ = observableFrom([
      {
        id: '1',
        entity: new AcEntity({
          material: Cesium.Color.BLUE.withAlpha(0.5),
          height: 0,
          outline: true,
          width: 20,
          positions: Cesium.Cartesian3.fromDegreesArrayHeights([
            -120.0, 37.0,10000,
            -120.0, 32.0,10000
          ])
        }
        ),
        actionType: ActionType.ADD_UPDATE
      }
    ]).pipe(merge(this.updater));





  }
}
