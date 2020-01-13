import { Component, OnInit } from "@angular/core";
import { questions } from "./quiz.data";

interface Question {
  text: string;
  answers: Answer[];
}
interface Answer {
  text: string;
  isCorrect: boolean;
}

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: Question[] = questions;
  currentQuestionIndex: number;

  constructor() {}

  ngOnInit() {
    this.currentQuestionIndex = Math.floor(
      Math.random() * this.questions.length
    );
  }

  showAnswer() {
    alert("Hit");
  }
}
