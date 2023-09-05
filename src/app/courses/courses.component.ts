import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courseList= [
    {id: 1, name: "Development"},
    {id: 2, name: 'Dev-Ops'},
    {id:3, name: "Networking"}
  ]

  submit(f: { value: any; }){
    console.log(f)
    f.value;
  }
}
