import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent {

  @Input() name: any;
  @Input() console: any;

}