import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saloon';

  forgotten: boolean = false;

  forgetMe(){
    console.log('forget me körs');
    this.forgotten = true;
  }
}
