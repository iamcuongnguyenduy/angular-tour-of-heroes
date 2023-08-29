import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';


  imgURL = "./image.png"
  colSpan = 2;
  pageHeader: string = 'Student Details';
  FirstName: string = 'Anurag';
  LastName: string = 'Mohanty';
  Branch: string = 'CSE';
  Mobile: number = 9876543210;
  Gender: string = 'Male';
  Age: number = 22;

}
