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

  constructor(private firestore:Firestore, private db:AngularFirestore ) { }

  sendTaskData(task:CTask){
    this.db.collection('tasks').doc(
      `${task.id} `
      ).set(task)
  }
  getAllTasks(): Observable<CTask[]> {
    let tasks = collection(this.firestore, 'tasks');
    return collectionData(tasks, { idField: 'id' }) as Observable<CTask[]>;
  }

}
