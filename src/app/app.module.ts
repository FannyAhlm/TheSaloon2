import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { FormsModule } from '@angular/forms';
import { BeveragesComponent } from './beverages/beverages.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
import { ForgetMeComponent } from './forget-me/forget-me.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    BeveragesComponent,
    TheUsualComponent,
    ForgetMeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
