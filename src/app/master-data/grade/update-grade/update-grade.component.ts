import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/board.service';

@Component({
  selector: 'app-update-grade',
  templateUrl: './update-grade.component.html',
  styleUrls: ['./update-grade.component.css']
})
export class UpdateGradeComponent implements OnInit {

  updateGradeForm:FormGroup
  constructor(private router : Router, private arouter : ActivatedRoute, private board:BoardService ) { }

  ngOnInit(): void {
    this.updateGradeForm=new FormGroup({
      BoardName: new FormControl('', {validators:[Validators.required]}),
      Grade: new FormControl('', {validators:[Validators.required]}),
      CreateAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en')),
      UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
    })   
    //console.log(this.arouter.snapshot.params.id)
    this.board.getCurrentGrade(this.arouter.snapshot.params.id).subscribe((result)=>{
      //console.log('Result for update:', result)
      this.updateGradeForm=new FormGroup({
        Grade: new FormControl(result['Grade']),
        BoardName: new FormControl(result['BoardName']),        
        CreateAt: new FormControl(result['CreateAt']),
        UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
      })    
  
    })

  }//ngOnInit
  updateGrade(){
    this.board.updateGrade(this.arouter.snapshot.params.id, this.updateGradeForm.value).subscribe((result)=>{
      //console.log("Upadte successful", result)
      this.router.navigateByUrl('/grade');
    })
  }

}
