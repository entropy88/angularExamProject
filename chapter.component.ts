import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  chapter: any;

  constructor(db: AngularFireDatabase) { 
    db.object('/chapters/3')
    .valueChanges()
    .subscribe(resp => {
      this.chapter=resp;
      this.chapter.choices=Object.entries(this.chapter.choices)
    })
  }

  ngOnInit(): void {
  }

}
