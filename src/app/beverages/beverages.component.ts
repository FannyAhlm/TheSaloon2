import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VisitorInfoService } from '../visitor-info.service';
import { Drink } from './../drink';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  storageService: VisitorInfoService;

  newDrink: string;

  beverages: Drink[];

  @Output() sendDrink = new EventEmitter();
  @Output() continueDialogue = new EventEmitter();
  
  constructor(storageService: VisitorInfoService) { 
    this.storageService = storageService;
  }

  ngOnInit(): void {
     this.storageService.setLocalStorage();
     this.beverages = this.storageService.drinkListLocalstorage;
  }

  selectedDrink(drink: string){
    this.sendDrink.emit(drink.toLowerCase());
    this.continueDialogue.emit();
    this.storageService.saveDrink(drink.toLowerCase());
  }

}
