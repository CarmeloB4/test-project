import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public showSpinner = new BehaviorSubject<boolean>(false);

  constructor() {}

  public show() {
    this.showSpinner.next(true);
  }

  public hide() {
    this.showSpinner.next(false);
  }
}
