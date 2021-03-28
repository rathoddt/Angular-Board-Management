import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {
  addBoardForm:FormGroup
  
  
  constructor(private board: BoardService, private router : Router) {    
   }

  ngOnInit(): void {
    this.addBoardForm=new FormGroup({
      BoardName: new FormControl('', {validators:[Validators.required]}),
      BoardDesc: new FormControl('', {validators:[Validators.required]}),
      CreateAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en')),
      UpdatedAt: new FormControl(formatDate(new Date(), 'dd/MM/yyyy, h:mm a', 'en'))
    })
  } 
  addBoard(){
    //console.log(this.addBoardForm.value)  
    this.board.addBoard(this.addBoardForm.value).subscribe((result)=>{
      //console.log('The result is here',result)
      //this.showMsg= true;
      //this.router.navigate(['/','board'])
      const formValue = this.addBoardForm.value;
      alert(formValue.BoardName + " is added succesfully")
      this.router.navigateByUrl('/board');
      
    })
  }

}
