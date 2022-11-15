import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError} from "rxjs";
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  PATH_OF_API = environment.apiURL;

  constructor(private httpClient: HttpClient){ }

  getProducts(): Observable<any>{
    return this.httpClient.get(this.PATH_OF_API+'products').pipe(
      tap(data=>console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    let errMsg ='';
    if(err.error instanceof ErrorEvent){
      errMsg = `An error occured: ${err.error.message}`;
    }
    else{
      errMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errMsg);
    return throwError(()=>errMsg);
  }


  // getAuthenticated(loginData:any): Observable<any>{
  //     return this.httpClient.post(this.PATH_OF_API+'/login',loginData);
  // }

  // registerNewUser(signupData:any): Observable<any>{
  //   return this.httpClient.post(this.PATH_OF_API+'/register',signupData);
  // }

}
