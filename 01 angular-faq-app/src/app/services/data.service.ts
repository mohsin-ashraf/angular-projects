import { Injectable } from '@angular/core';
import { Question } from "../models/Question";
@Injectable({
  providedIn: 'root'
})


export class DataService {

  questions: Question[];

  constructor() {
    /*this.questions = [
      {
        text: "What is your name",
        answer: "My name is mohsin",
        hide: true
      },
      {
        text: "What is your age",
        answer: "My age is 23",
        hide: true
      },
      {
        text: "What is your favorite language",
        answer: "My favorite language is Python",
        hide: true
      }
    ]*/
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
    let questions;
    if (localStorage.getItem('questions') === null) {
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(this.questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(this.questions));
    }
  }
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i] === question) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
