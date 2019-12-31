import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Users } from "../models/Users";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
}
