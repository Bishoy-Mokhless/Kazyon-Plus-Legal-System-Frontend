import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 /*  constructor(private router: Router) {}
  public href:Router  = this.router; */
  title = 'contracts';
  navBarHide(){
   if(localStorage.getItem("token"))
    {
      console.log(window.location.href)


      return true;
    }
    return false;
  }
 /*  @HostListener("window:beforeunload",["$event"])
    clearLocalStorage(_event: any){
        localStorage.clear();
    } */
}
