import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Preference } from 'src/app/preference.model';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  constructor(private firestore: AngularFirestore) { }

  getPreferences() {
    return this.firestore.collection('preferences').snapshotChanges();
  }
  
  getPrefs({module, name}) {
    if (module && name) {
      return this.firestore.collection('preferences', pref => pref.where('module', '==', module).where('name', '==', name)).snapshotChanges();
    } else if (module && !name) {
      return this.firestore.collection('preferences', pref => pref.where('module', '==', module)).snapshotChanges();
    } else if (!module && name){
      return this.firestore.collection('preferences', pref => pref.where('name', '==', name)).snapshotChanges();
    } else {
      this.getPreferences()
    }
  }
  getPrefByModule(module: string) {
    return this.firestore.collection('preferences', pref => pref.where('module', '==', module)).snapshotChanges();
  }
  
  getPrefById(id: string) {
    return this.firestore.collection('preferences', pref => pref.where('id', '==', id)).snapshotChanges();
  }

  getPrefByName(name: string) {
    return this.firestore.collection('preferences', pref => pref.where('name', '==', name)).snapshotChanges();
  }

  addPref(pref: Preference) {
    console.log(pref);
    this.firestore.collection('preferences').add({...pref});
  }
  
  deleteById(id: string) {
    this.firestore.collection('preferences').doc(id).delete();
  }
  
  updatePref(pref: Preference) {
    this.firestore.collection('preferences').doc(pref.id).update({
      name: pref.name,
      level6Override: pref.level6Override,
      module: pref.module,
      required: !!pref.required,
      value: pref.value,
    });
  }
}
