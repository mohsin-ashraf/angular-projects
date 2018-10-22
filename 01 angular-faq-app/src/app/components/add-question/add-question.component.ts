import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Question } from "../../models/Question"
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Output() questionAdded = new EventEmitter<Question>();
  text;
  answer;
  constructor() { }

  ngOnInit() {
  }

  addQuestion(f) {
    if (this.text == '' || this.text == undefined || this.text == null || this.answer == '' || this.answer == undefined || this.answer == null)
      return;
    this.questionAdded.emit({ text: this.text, answer: this.answer, hide: true });
    this.text = '';
    this.answer = '';
  }

}
