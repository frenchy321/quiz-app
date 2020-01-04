import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "../models/users";
import { User } from "firebase";

@Injectable({
  providedIn: "root"
})
export class UserService {
  usersCollection: AngularFirestoreCollection<Users>;
  usersDoc: AngularFirestoreDocument<Users>;
  users: Observable<Users[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection("users", ref =>
      ref.orderBy("score", "asc")
    );
  }

  getUsers(): Observable<Users[]> {
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as User;
          data.providerId = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.users;
  }
}
