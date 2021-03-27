import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  displayedColumns =['id', 'Grade','BoardName','CreateAt','UpdatedAt', 'Actions']
  dataSource:any
  
  constructor(private board:BoardService) { }

  ngOnInit(): void {
    this.board.getGrade().subscribe((result:any)=>{
      this.dataSource = new MatTableDataSource(result);
      //console.log(result['BoardName'])
    })

  }
  deleteGrade(gradeId){    
    //this.dataSource.data.splice(boardId, 1)
    this.board.deleteGrade(gradeId).subscribe((result)=>{
      console.log('RESULT: ', result)      
    })
    this.board.getGrade().subscribe((result:any)=>{
      this.dataSource = new MatTableDataSource(result);
    })    
  }


}
