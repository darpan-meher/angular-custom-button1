import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onPrimaryClick(){
    console.log('Primary button clicked');
  }
  onSuccessClick(){
    console.log('Success button clicked');
  }
}
