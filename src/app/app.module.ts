import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

var config: {
  apiKey: "AIzaSyDZBZCpy89wd8ajmFEYvyxGoI9TqzsTGm8",
  authDomain: "angular-proyectofinal-511cf.firebaseapp.com",
  projectId: "angular-proyectofinal-511cf",
  storageBucket: "angular-proyectofinal-511cf.appspot.com",
  messagingSenderId: "106521839042",
  appId: "1:106521839042:web:d75b087a571e48672a425b"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
