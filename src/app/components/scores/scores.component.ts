import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/User";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  users: User[];

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe(users => (this.users = users.reverse()));
  }
}
