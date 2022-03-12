import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sport-card',
  templateUrl: './sport-card.component.html',
  styleUrls: ['./sport-card.component.scss']
})
export class SportCardComponent {
@Input() sport!:string;

  constructor() { }

}
