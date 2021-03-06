import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { ResultComponent } from "./components/result/result.component";
import { appRoutes } from "./app-routing.module";
import { ComponentsComponent } from "./components/components.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    QuizComponent,
    ResultComponent,
    ComponentsComponent,
    AddUserComponent,
    NotFoundComponent,
    ScoresComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, "quiz-app"),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
