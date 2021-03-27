import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/board.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  addGradeForm:FormGroup
  boardName:{}
  constructor(private board: BoardService, private router : Router) { }
  dataSourceBoard:any;
  ngOnInit(): void {
    this.addGradeForm=new FormGroup({
      Grade: new FormControl('', {validators:[Validators.required]}),
      BoardName: new FormControl('', {validators:[Validators.required]}),
      CreateAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en')),
      UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
    })
    this.board.getBoard().subscribe((result:any)=>{
      this.boardName= result;
      //console.log(result['BoardName'])
    })        
  }
  addGrade(){
    this.board.addGrade(this.addGradeForm.value).subscribe((result)=>{
      const formValue = this.addGradeForm.value;
      alert('Grade '+formValue.Grade +" for "+formValue.BoardName+ " is added succesfully")
      this.router.navigateByUrl('/grade');
      
    })
  }

}
