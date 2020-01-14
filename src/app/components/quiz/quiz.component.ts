import { Component, OnInit } from "@angular/core";
import { questions } from "./quiz.data";

export interface Question {
  questionText: string;
  answers: Answer[];
}
interface Answer {
  answerText: string;
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
  selectedAnswer: Answer | null;

  constructor() {}

  ngOnInit() {
    this.currentQuestionIndex = Math.floor(
      Math.random() * this.questions.length
    );
  }

  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
  }
}
