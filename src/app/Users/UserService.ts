import { Injectable } from "@angular/core";
import { IUser } from "./User";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(private http: HttpClient){}

  private userUrl = "http://localhost:3000/users";

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(d => console.log('API response', JSON.stringify(d))),
      catchError(this.errorHandling)
    )
  }

  private errorHandling(errorHandling: HttpErrorResponse) {
    console.log(errorHandling);
    return throwError (errorHandling.message);
  };
}
