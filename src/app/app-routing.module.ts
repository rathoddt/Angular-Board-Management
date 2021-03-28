import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBoardComponent } from './master-data/board/add-board/add-board.component';
import { BoardComponent } from './master-data/board/board.component';
import { GradeComponent } from './master-data/grade/grade.component';
import { SubjectComponent } from './master-data/subject/subject.component';
import { UpdateBoardComponent } from './master-data/board/update-board/update-board.component';
import { AddGradeComponent } from './master-data/grade/add-grade/add-grade.component';
import { UpdateGradeComponent } from './master-data/grade/update-grade/update-grade.component';
import { NewSubjectComponent } from './master-data/subject/new-subject/new-subject.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'board', component:BoardComponent},
  {path:'grade', component:GradeComponent},
  {path:'subject', component:SubjectComponent},
  {path:'add-board', component:AddBoardComponent},
  {path:'update-board/:id',component:UpdateBoardComponent},
  {path:'add-grade', component:AddGradeComponent},
  {path:'update-grade/:id',component:UpdateGradeComponent},
  {path:'add-subject', component:NewSubjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
