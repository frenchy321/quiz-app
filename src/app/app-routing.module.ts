import { Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { ResultComponent } from "./components/result/result.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const appRoutes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "quiz", component: QuizComponent },
  { path: "result", component: ResultComponent },
  { path: "scores", component: ScoresComponent },
  { path: "**", component: NotFoundComponent }
];
