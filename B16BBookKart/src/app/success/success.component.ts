import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    let token:any = localStorage.clear()
    if(!token){
      this.route.navigate(["login"])
      alert("you need to log out?")
    }
  }
  // onProceed(){
  //   // this.route.navigate(["success"])
  //   this.route.navigate(["dashboard"])

  // }
  onCheckIn(){

    this.route.navigate(["/dashboard"])
  }

}
