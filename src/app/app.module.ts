import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBxmq5QdyYzUKjJdqWlgfRzQ2Afd-Vp7q0",
    authDomain: "songlist2-119e7.firebaseapp.com",
    databaseURL: "https://songlist2-119e7.firebaseio.com",
    projectId: "songlist2-119e7",
    storageBucket: "songlist2-119e7.appspot.com",
    messagingSenderId: "474369175358"
  }
  
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
