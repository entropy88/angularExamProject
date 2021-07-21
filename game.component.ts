import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  chapter!: any;

  constructor(db: AngularFireDatabase) {
    db.object('/chapters/0')
    .valueChanges()
    .subscribe(resp => {
      this.chapter=resp;
      this.chapter.choices=Object.entries(this.chapter.choices)
    })

  }
}
