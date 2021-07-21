import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  chapter: any;
  chapterNumber: any;
 
  constructor(db: AngularFireDatabase, private route: ActivatedRoute) { 
    this.chapterNumber=this.route.snapshot.params['chapterNumber'];
        
    
    db.object('/chapters/'+this.chapterNumber)
    .valueChanges()
    .subscribe(resp => {
      this.chapter=resp;
      this.chapter.choices=Object.entries(this.chapter.choices);
      
    }) 
  }
 
  
  ngOnInit(): void {
    //how do you refresh that?
  }

}


