import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Preference} from './preference.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private prefSource = new BehaviorSubject(new Preference());
  currentPref = this.prefSource.asObservable();

  constructor() { }

  changePref(pref: Preference) {
    console.log('pref changed to', pref)
    this.prefSource.next(pref);
  }

}