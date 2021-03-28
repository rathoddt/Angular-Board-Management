import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BoardService {
board_url="http://localhost:3000/board"
grade_url="http://localhost:3000/grade"
subject_url="http://localhost:3000/subject"
  constructor(private http:HttpClient) { }
  getBoard(){
    return this.http.get(this.board_url)
  }
  addBoard(data){
      //console.log("The new baord data:", data)
      return this.http.post(this.board_url, data) 
  }
  deleteBoard(id){
    return this.http.delete(`${this.board_url}/${id}`)
  }
  getCurrentBoard(id){
    return this.http.get(`${this.board_url}/${id}`)
  }
  updateBoard(id, data){
    return this.http.put(`${this.board_url}/${id}`, data)
  }

  getGrade(){
    return this.http.get(this.grade_url)
  }
  addGrade(data){
    return this.http.post(this.grade_url, data) 
  }
  deleteGrade(id){
  return this.http.delete(`${this.grade_url}/${id}`)
  }
  getCurrentGrade(id){
    return this.http.get(`${this.grade_url}/${id}`)
  }
  updateGrade(id, data){
    return this.http.put(`${this.grade_url}/${id}`, data)
  }
  getSubject(){
    return this.http.get(this.subject_url)
  }
  getGradeForBoard(board){
    //console.log(this.http.get(`${this.grade_url}?BoardName=${board}`))
  ////GET /posts?title=json-server&author=typicode
  //GET /posts?id=1&id=2
  //GET /comments?author.name=typicode
  }
  addSubject(data){
    return this.http.post(this.subject_url, data) 
  }

  

}
