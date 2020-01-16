import { Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { ResultComponent } from "./components/result/result.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./auth/auth.guard";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "quiz", component: QuizComponent, canActivate: [AuthGuard] },
  { path: "result", component: ResultComponent, canActivate: [AuthGuard] },
  { path: "scores", component: ScoresComponent, canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent }
];
