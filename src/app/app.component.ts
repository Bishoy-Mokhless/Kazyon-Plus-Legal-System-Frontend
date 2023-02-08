import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contracts';
  navBarHide(){
    if(localStorage.getItem("token"))
    {
      return true;
    }
    return false;
  }
}
