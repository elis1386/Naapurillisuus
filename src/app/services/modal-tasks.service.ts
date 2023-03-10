import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalTasksService {
  isVisible$ = new BehaviorSubject<boolean>(false);


  constructor(private router: Router) {}

  open() {
    this.isVisible$.next(true);
    console.log('click');
  }
  close() {
    this.isVisible$.next(false);
  }
  cancel() {
    this.router.navigate(['helper-dashboard']);
    this.isVisible$.next(false);
  }
  done() {
    this.router.navigate(['/helper-dashboard/done']);
    this.isVisible$.next(false);
  }
}
