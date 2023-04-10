import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CTask } from '../models/client-tasks';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {


  tasks: Observable<CTask[]>;
  tasksCollection: AngularFirestoreCollection<CTask>;
  currentTask: any;

  constructor(private firestore: Firestore, private db: AngularFirestore) {}


  sendTaskData(task: CTask) {
    this.db.collection('tasks').doc(`${task.id}`).set(task);
  }
  getAllTasks(): Observable<CTask[]> {
    let tasks = collection(this.firestore, 'tasks');
    return collectionData(tasks, { idField: 'id' }) as Observable<CTask[]>;
  }
/*   getTask(id: string) {
    this.getAllTasks().subscribe((data) => {
      data.forEach((task) => {
        if (task.id === id) {
          this.currentTask = task;
          return this.currentTask;
        }
      });
    });
  } */
  getTask(id: string): CTask | any{
    let currentTask;
     return firebase.firestore().collection('tasks').doc(id).get()
    .then(task=>{
        currentTask = task.data();
        console.log(currentTask);
        return currentTask;
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  } 

  update(id?: string, active: boolean = false, inProgress: boolean = false, done: boolean = false){
    firebase.firestore().collection('tasks').doc(id).update({status:{active: active, inProgress: inProgress, done: done}})
  }

  deleteTask(id:string) {
    firebase.firestore().collection('tasks')
    .doc(id).delete()
    .catch(err => {
      console.log(err)
    })
  }
}
