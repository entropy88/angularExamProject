import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  chapters!: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/chapters')
      .valueChanges()
      .subscribe(resp => {


        resp.forEach(r => {

        })
        this.chapters = resp;
      })
  }

}
