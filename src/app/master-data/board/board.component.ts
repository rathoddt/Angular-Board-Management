import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  displayedColumns =['id', 'BoardName', 'BoardDesc','CreateAt','UpdatedAt', 'Actions']
  dataSource:any
  

  constructor(private board:BoardService) { }

  ngOnInit(): void {
    this.board.getBoard().subscribe((result:any)=>{
      this.dataSource = new MatTableDataSource(result);
    })
//    this.dataSource.data=this.trainingService.getCompletedOrCancelledExercises()
  }
  deleteBoard(boardId){
    //this.dataSource.splice(boardId-1,1)
    this.dataSource.data.splice(boardId, 1)
    this.board.deleteBoard(boardId).subscribe((result)=>{
      console.log('RESULT: ', result)      
    })
    this.board.getBoard().subscribe((result:any)=>{
      this.dataSource = new MatTableDataSource(result);
    })    
  }

}
