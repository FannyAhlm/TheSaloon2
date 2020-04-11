import { Injectable } from '@angular/core';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class VisitorInfoService {

  oldVisitor: boolean = false;
  oldVisitorName: string;
  oldVisitorDrink: string;

  originalDrinkList: Drink[] =
  [
    {drink:'beer'}, 
    {drink:'whiskey'}, 
    {drink:'vodka'}, 
    {drink:'milk'}
  ];

  drinkListLocalstorage: Drink[];

  constructor() { }

  checkLocalStorage():boolean{
    if(localStorage.lastname){
      this.oldVisitor = true;
      this.oldVisitorName = localStorage.lastname;
      this.oldVisitorDrink = localStorage.theUsual;
    }
    // this.setDrinks();
    // console.log('checkLocalStorage');
    return this.oldVisitor;
  }

  saveName(firstName: string, lastName: string):any{
    localStorage.setItem('firstname', firstName);
    localStorage.setItem('lastname', lastName);
  }

  saveDrink(drink: string){
    localStorage.setItem('theUsual', drink);
    this.updateDrinkList(drink);
    this.oldVisitorDrink = localStorage.theUsual;
  }

   setLocalStorage(){
     if(!localStorage.getItem('drinklist')){
      localStorage.setItem('drinklist', JSON.stringify(this.originalDrinkList));
      this.drinkListLocalstorage = this.originalDrinkList;
     } else {
       this.getDrinkList();
     }

   }

   getDrinkList(){
     this.drinkListLocalstorage = JSON.parse(localStorage.getItem('drinklist'));
   }

  updateDrinkList(drink:string){
    if(!this.drinkListLocalstorage.some( value => value.drink == drink)){
      this.drinkListLocalstorage.push({drink: drink});
      localStorage.setItem('drinklist', JSON.stringify(this.drinkListLocalstorage));
    }
  }


}
