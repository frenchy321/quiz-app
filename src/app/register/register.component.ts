import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  id: string;
  name: string;
  email: string;

  constructor() {}

  ngOnInit() {
    (this.id = ""), (this.name = ""), (this.email = "");
  }

  onSubmit() {}
}
