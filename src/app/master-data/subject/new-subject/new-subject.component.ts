import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/board.service';
import { Router } from '@angular/router';
//import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.css']
})
export class NewSubjectComponent implements OnInit {

  addSubjectForm:FormGroup
   
  dupBoard:string[]=[]
  uniqueBoard:string[]=[]
  grades:string[]=[]
  selectedBoard:string
  constructor(private board: BoardService, private router : Router) {    
   }

  ngOnInit(): void {
    this.addSubjectForm=new FormGroup({
      Subject: new FormControl('', {validators:[Validators.required]}),
      BoardName: new FormControl('', {validators:[Validators.required]}),
      Grade: new FormControl('', {validators:[Validators.required]}),
      CreateAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en')),
      UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
    })
    this.board.getGrade().subscribe((result:any)=>{
      let attribute=Object.values(result)      
      for (var key in attribute) {        
          //console.log('BoardName:'+attribute[key]['BoardName'])
          this.dupBoard.push(attribute[key]['BoardName'])        
      }
      this.uniqueBoard=this.dupBoard.filter((n, i) => this.dupBoard.indexOf(n) === i);
      //console.log("Unque Board names:", this.uniqueBoard)


    })
  } 
  addSubject(){
    //console.log(this.addBoardForm.value)  
    this.board.addSubject(this.addSubjectForm.value).subscribe((result)=>{
      const formValue = this.addSubjectForm.value;
      alert(formValue.Subject + " subject is added succesfully")
      this.router.navigateByUrl('/subject');
      
    })
  }
  getGrade(userSelectedBoard){
    console.log(userSelectedBoard)
    this.board.getGrade().subscribe((result)=>{
    let attribute=Object.values(result)
    this.grades=[]
    for (var key in attribute) {
      if (attribute[key]['BoardName']===userSelectedBoard) {
        console.log('Grade:'+attribute[key]['Grade'])
        this.grades.push(attribute[key]['Grade'])
      }
    }
    })
  }

}
