import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CTask } from '../models/client-tasks';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  task: Observable<CTask[]>
  tasksCollection: AngularFirestoreCollection<CTask>
  allTasks: any;

  constructor(private firestore:Firestore, private db:AngularFirestore) { }

  getAllTasks():  Observable<CTask[]> {
    let task = collection(this.firestore, 'tasks');
     this.allTasks = collectionData(task, { idField: 'id' }) as Observable<
    CTask[]
  >;
  console.log(this.allTasks);
  return this.allTasks
  }

  sendTaskData(task:CTask){
    this.db.collection('tasks').add(task)
  }
}
