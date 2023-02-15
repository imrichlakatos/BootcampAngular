import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private subject = new Subject<string | null>();

  show(message: string) {
    this.subject.next(message);
    setTimeout(() => this.subject.next(null), 5000);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
