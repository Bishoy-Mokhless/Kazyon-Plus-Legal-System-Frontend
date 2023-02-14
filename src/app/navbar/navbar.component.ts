import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const username = JSON.parse(localStorage.getItem('username')!);
    //console.log(username);
    const tempUsername = JSON.stringify(username);
    //console.log(tempUsername);
    const finalUsername= tempUsername.substring(1,tempUsername.length-1)

    document.getElementById("user")!.innerHTML =finalUsername+ " مرحبا";
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(['**']);
  }

}
