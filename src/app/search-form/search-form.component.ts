import { Component, OnInit } from '@angular/core';
import { Preference } from '../preference.model';
import {PreferenceService} from '../preference.service';
import { DataService } from '../data.service';


@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  showForm:boolean = false;
  newPref: Preference = new Preference();

  constructor(private preferenceService: PreferenceService, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentPref.subscribe(newPref => this.newPref = newPref)
  }

  onAddClick() {
    this.showForm = true;
  }

  onCancelClick() {
    this.showForm = false;
  } 

  addPreference() {
    if (this.newPref.id) {
      this.preferenceService.updatePref(this.newPref);
    } else {
      this.preferenceService.addPref(this.newPref);
    }
    this.newPref = new Preference();
    this.onCancelClick();
  }
}
