import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('hoverEffect', [
      state('normal', style({
        backgroundColor: 'white',
        transform: 'scale(1)'
      })),
      state('hovered', style({
        backgroundColor: 'grey',
        transform: 'scale(1.1)'
      })),
      transition('normal => hovered', animate('300ms ease-in')),
      transition('hovered => normal', animate('300ms ease-out'))
    ])
  ]
})
export class CardComponent implements OnInit {
  state: string = 'normal';


  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.state = 'hovered';
  }

  onMouseLeave() {
    this.state = 'normal';
  }

}
