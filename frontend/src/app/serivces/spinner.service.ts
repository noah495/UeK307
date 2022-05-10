import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class SpinnerService {
  visibility: BehaviorSubject<boolean>;
  isLoading: boolean = false;

  constructor() {
    // @ts-ignore
    this.visibility = new BehaviorSubject(false);
  }

  show() {
    this.visibility.next(true);
    this.isLoading = true;
  }

  hide() {

    this.visibility.next(false);
    this.isLoading = false;
  }
}
