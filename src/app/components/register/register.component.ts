import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: "",
    email: "",
    score: 0
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.userService.newUser(this.user);
    this.router.navigate(["/quiz"]);
  }
}
