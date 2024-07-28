import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public usableData: any;

  public dataSubject = new Subject<string>();

  private message = new BehaviorSubject('Initial Message');
  public getMessage = this.message.asObservable();

  constructor() { }

  getCommonData() {

  }

  setMessage(message: string) {
    this.message.next(message);
  }
}
