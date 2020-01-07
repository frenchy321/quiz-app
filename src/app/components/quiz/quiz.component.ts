import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questions: string[] = ["question1", "question2", "question3"];

  answers: (string | { corr: string })[][] = [
    ["Answer 1", "Answer 2", { corr: "Answer 3" }],
    [{ corr: "Answer 4" }, "Answer 5", "Answer 6"],
    ["Answer 7", { corr: "Answer 8" }, "Answer 9"],
    ["Answer 10", "Answer 11", { corr: "Answer 12" }]
  ];

  currentQuestion: string;

  currentAnswers: string[];

  constructor() {}

  ngOnInit() {
    const questionIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[questionIndex];
    this.currentAnswers = this.answers[questionIndex].map(answer => {
      if (typeof answer === "string") {
        return answer;
      }
      return answer.corr;
    });
  }
}
