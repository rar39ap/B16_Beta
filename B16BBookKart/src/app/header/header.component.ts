import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onCheckOut(){
    
    
        this.route.navigate(["/dashboard"])
   
    
    // let token = localStorage.getItem("token")
    // if(!token){
    //   this.route.navigate(["/login"])
    // }

    // else {
    //   this.route.navigate(["/dashboard"])
    // }
  }

  Chekin(){
    let token = localStorage.getItem("token")
    if(!token)
    this.route.navigate(["/login"])
  }
}
