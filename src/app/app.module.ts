import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { ResultComponent } from "./components/result/result.component";
import { appRoutes } from "./app-routing.module";
import { ComponentsComponent } from "./components/components.component";
import { AddClientComponent } from "./components/add-client/add-client.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    QuizComponent,
    ResultComponent,
    ComponentsComponent,
    AddClientComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
