import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'

import {HttpClientModule} from '@angular/common/http'
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './master-data/board/board.component';
import { GradeComponent } from './master-data/grade/grade.component';
import { SubjectComponent } from './master-data/subject/subject.component';
import { AddBoardComponent } from './master-data/board/add-board/add-board.component';
import { UpdateBoardComponent } from './master-data/board/update-board/update-board.component';
import { AddGradeComponent } from './master-data/grade/add-grade/add-grade.component';
import { UpdateGradeComponent } from './master-data/grade/update-grade/update-grade.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent,
    GradeComponent,
    SubjectComponent,
    AddBoardComponent,
    UpdateBoardComponent,
    AddGradeComponent,
    UpdateGradeComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
