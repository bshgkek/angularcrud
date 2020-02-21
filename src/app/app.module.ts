import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PreferenceListComponent } from './preference-list/preference-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
@NgModule({
    declarations: [
        AppComponent,
        PreferenceListComponent,
        SearchFormComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule { }





