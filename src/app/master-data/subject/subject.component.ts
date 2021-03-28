import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  displayedColumns =['id', 'Subject', 'BoardName', 'Grade','CreateAt','UpdatedAt', 'Actions']
  dataSource:any
  constructor(private board:BoardService) { }

  ngOnInit(): void {
    this.board.getSubject().subscribe((result:any)=>{
      this.dataSource = new MatTableDataSource(result);
    })
//    this.dataSource.data=this.trainingService.getCompletedOrCancelledExercises()
  }
}
