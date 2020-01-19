import { Component, OnInit } from "@angular/core";
import { questions } from "./quiz.data";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

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
  currentQuestionIndex: number | null = -1;
  selectedAnswer: Answer | null;
  selectedAnswers: Answer[] = [];

  constructor(private router: Router, private userSevice: UserService) {}

  ngOnInit() {
    this.questions = this.shuffle(this.questions);
    this.nextQuestion();
  }

  selectAnswer(answer: Answer) {
    if (this.selectedAnswer === null) {
      this.selectedAnswer = answer;
      this.selectedAnswers.push(answer);
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedAnswer = null;
    if (this.currentQuestionIndex >= this.questions.length) {
      const score =
        this.selectedAnswers.filter(answer => {
          return answer.isCorrect;
        }).length * 2;
      this.userSevice.submitScore(score);
      this.router.navigate(["/scores"]);
    }
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
