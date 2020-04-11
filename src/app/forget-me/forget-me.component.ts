import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VisitorInfoService } from '../visitor-info.service';

@Component({
  selector: 'app-forget-me',
  templateUrl: './forget-me.component.html',
  styleUrls: ['./forget-me.component.css']
})
export class ForgetMeComponent implements OnInit {

  storageService: VisitorInfoService;
  
  @Output() forgetMe = new EventEmitter();

  constructor(storageService: VisitorInfoService) { 
    this.storageService = storageService;
  }

  ngOnInit(): void {
  }
  forgetUser() {
    this.forgetMe.emit();
    this.storageService.removeUser();
  }

}
