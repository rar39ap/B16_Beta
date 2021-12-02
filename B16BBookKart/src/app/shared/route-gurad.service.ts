import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RouteGuradService {
  _url:any = "https://bookcart.azurewebsites.net/api/Login1"

  constructor(private http: HttpClient) { }
  
  logIn(body:any){
    return this.http.post(this._url, body)
                    .pipe(catchError(this.errorHandler));
  }
  loggedIn(){
    return localStorage.getItem("token")
  }

  errorHandler(error : HttpErrorResponse):any{
    return throwError(error.message|| "server error")
  }
  
}
