import {Component} from '@angular/core';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrls: ['radio-ng-model-example.css'],
})
export class RadioNgModelExample {
  favoriteSeason: {name:string, ID: number, flavor: {subName:string, subID: number}, extra: number} =  {name: 'Winter', ID: 1, flavor: {subName: 'idea1', subID: 5}, extra: 3};

  seasons = [
    {name: 'Winter', ID: 1, flavor: {subName: 'idea1', subID: 5}, extra: 3},
    {name: 'Spring', ID: 2, flavor: {subName: 'idea2', subID: 6}, extra: 6},
    {name: 'Summer', ID: 3, flavor: {subName: 'idea3', subID: 7}, extra: 9},
    {name: 'Autumn', ID: 4, flavor: {subName: 'idea4', subID: 8}, extra: 12},
  ];
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */