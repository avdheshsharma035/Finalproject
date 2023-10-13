import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  
  uid!: string;
  upswd!: string;
  message: any;

  constructor(private s1:LoginService , private router:Router) 
  { }
       admin :Admin = new Admin();
  ngOnInit(): void {
  }
     link:string="";
          logindata()
          {
            // console.log(this.user)
              this.s1.logindata1(this.admin).subscribe( data=>
               {this.link="/login",alert("login Successful"),this.router.navigate(["/employees"])},
                error=>alert("invalid id/pswd")
              );
          }

}
