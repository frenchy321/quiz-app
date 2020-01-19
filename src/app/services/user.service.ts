import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  usersDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  currentUser: User;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection("users", ref =>
      ref.orderBy("score", "asc")
    );
  }

  getUsers(): Observable<User[]> {
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as User;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.users;
  }

  newUser(user: User) {
    this.currentUser = user;
  }

  submitScore(score: number) {
    this.currentUser.score = score;
    this.usersCollection.add(this.currentUser);
  }
}
