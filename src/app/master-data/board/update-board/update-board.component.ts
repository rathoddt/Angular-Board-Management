import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {formatDate} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/board.service';
@Component({
  selector: 'app-update-board',
  templateUrl: './update-board.component.html',
  styleUrls: ['./update-board.component.css']
})
export class UpdateBoardComponent implements OnInit {
  updateBoardForm:FormGroup
  constructor(private router : Router, private arouter : ActivatedRoute, private board:BoardService ) { }

  ngOnInit(): void {
    this.updateBoardForm=new FormGroup({
      BoardName: new FormControl('', {validators:[Validators.required]}),
      BoardDesc: new FormControl('', {validators:[Validators.required]}),
      CreateAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en')),
      UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
    })    
    console.log(this.arouter.snapshot.params.id)
    this.board.getCurrentBoard(this.arouter.snapshot.params.id).subscribe((result)=>{
      //console.log('Result for update:', result)
      this.updateBoardForm=new FormGroup({
        BoardName: new FormControl(result['BoardName']),
        BoardDesc: new FormControl(result['BoardDesc']),
        CreateAt: new FormControl(result['CreateAt']),
        UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
      })    
  
    })

  }//ngOnInit
  updateBoard(){
    //console.log(this.updateBoardForm.value)
    this.board.updateBoard(this.arouter.snapshot.params.id, this.updateBoardForm.value).subscribe((result)=>{
      //console.log("Upadte successful", result)
    })
  }

}
