import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Users } from "../../models/Users";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  users: Users[];

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }
}
