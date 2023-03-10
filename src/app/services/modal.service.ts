import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);


  constructor(private router: Router) {}

  open() {
    this.isVisible$.next(true);
    console.log('click');
  }
  close() {
    this.isVisible$.next(false);
    this.router.navigate([''])
  }
  cancel() {
    this.isVisible$.next(false);
  }
  done() {
    this.isVisible$.next(false);
  }
}
