import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  link="http://localhost:9001/Adminlogin";

  

  constructor(private h1:HttpClient) { }

  // login(username:string, password:string)
  //  {
  //   console.log(username);
  //   console.log(password);
  //     const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
  //     return this.h1.get("http://localhost:9001/",{headers,responseType:'text'as 'json' });
  //  }

  //   public getuserdetail()
  //   {
  //    // let username= "root";
  //    // let password ="12345";

  //     //const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
  //     return this.h1.get("http://localhost:9001/getusers"); //{headers});
  //   }

  logindata1(admin:Admin) : Observable<object>
  {
    return this.h1.post(`${this.link}`, admin);
  }
}
