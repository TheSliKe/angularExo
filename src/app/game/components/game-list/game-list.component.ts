import { Component, Input} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {

  @Input() gameList: any;

  constructor(private router: Router) {}

  selectGame(id: number): void{

    console.log(id);
    this.router.navigate(['./games/'+ id + "/details"]);

  }

}
