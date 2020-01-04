import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Users } from "../../models/Users";
import { from } from "rxjs";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent implements OnInit {
  users: Users[];

  constructor(private usersService: UserService) {}

  ngOnInit() {}
}
