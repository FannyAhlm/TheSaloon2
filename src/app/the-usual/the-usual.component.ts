import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VisitorInfoService } from '../visitor-info.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

  storageService: VisitorInfoService;

  theUsual: string = "";
  @Output() usualDrink = new EventEmitter();
  @Output() continueDialogue = new EventEmitter();


  constructor(storageService: VisitorInfoService) { 
    this.storageService = storageService;
  }

  ngOnInit(): void {
    if(this.storageService.checkLocalStorage()){
      this.theUsual = this.storageService.oldVisitorDrink;
    }
  }

  getTheUsual(){ 
    this.theUsual = this.storageService.oldVisitorDrink;
    this.storageService.saveDrink(this.theUsual.toLowerCase());
    this.continueDialogue.emit();
    this.usualDrink.emit(this.theUsual);
  }
  
}
