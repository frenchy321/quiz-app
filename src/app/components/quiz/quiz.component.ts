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
  currentQuestionIndex: number | null;
  selectedAnswer: Answer | null = null;
  selectedAnswers: Answer[] = [];

  constructor() {}

  ngOnInit() {
    this.nextQuestion();
  }

  selectAnswer(answer: Answer) {
    if (this.selectedAnswer === null) {
      this.selectedAnswer = answer;
      this.selectedAnswers[this.currentQuestionIndex] = answer;
    }
  }

  nextQuestion() {
    this.currentQuestionIndex = Math.floor(
      Math.random() * this.questions.length
    );
    this.selectedAnswer = null;
  }
}
