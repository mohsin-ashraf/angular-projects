import { Component } from '@angular/core';
import { Question } from "./models/Question"
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dataService: DataService) { }
  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }

  title = 'starter';
}
