import { Component, OnInit, Input } from '@angular/core';
import { VisitorInfoService } from '../visitor-info.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  storageService: VisitorInfoService;
  @Input() forgottenUser;

  greeting: string[] = ["Howdy, stranger. Haven't seen your face around here before. What's your name?"];
  name: string = "";
  firstName: string = "";
  lastName: string = "";
  usedBefore: boolean;
  drink: string = "";
  validName: boolean = true;
  whatDrink: boolean = false;


  constructor(storageService: VisitorInfoService) { 
    this.storageService = storageService;
  }

  ngOnInit(): void {
    if(this.storageService.checkLocalStorage()){

      this.greeting.push(`Hello again Mr. ${this.storageService.oldVisitorName}. The usual?`);
      this.greeting.push(`Hello again Mr. ${this.storageService.oldVisitorName}. Decided yet?`);

    }
    this.usedBefore = this.storageService.oldVisitor;
    
    this.storageService.setLocalStorage();
    if(this.storageService.oldVisitorDrink != ""){
      this.drink = this.storageService.oldVisitorDrink;
    }
  }

  nameValue(event):void{
    this.name = event.target.value;
  }

  saveNameCaller(){
    this.firstName = this.name.split(" ")[0];
    this.lastName = this.name.split(" ")[1];
    if(this.firstName != undefined &&
      this.lastName != undefined){
        this.storageService.saveName(this.firstName, this.lastName);
        this.validName = true;
        this.whatDrink = true;
      } else {
        this.validName = false;
        this.whatDrink = false;
      }
  }

}
