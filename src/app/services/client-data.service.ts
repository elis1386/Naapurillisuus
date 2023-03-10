import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CTask } from '../models/client-tasks';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  task: Observable<CTask[]>
  tasksCollection: AngularFirestoreCollection<CTask>

  constructor(private firestore:Firestore, private db:AngularFirestore) { }

  sendTaskData(task:CTask){
    this.db.collection('tasks').add(task)
  }
}
