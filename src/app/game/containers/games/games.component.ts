import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent{

  public gameList = [
    {id: 1, name: 'mario', console: 'Nes'},
    {id: 2, name: 'Zelda', console: 'N64'},
    {id: 3, name: 'COD', console: 'PC'}
  ];

  gameNotEmpty(): boolean {

    if (this.gameList.length > 0) {
      return true;
    }
    return false;
  }

}
