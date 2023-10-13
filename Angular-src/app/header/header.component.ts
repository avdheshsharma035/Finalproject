import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      
  
  uid!: string;
  upswd!: string;
  message: any;

  constructor(private router:Router) 
  { }
       
  ngOnInit(): void {
  }
     link:string="";
          logout()
          {
            localStorage.removeItem("admin");
            this.router.navigate(["/login"]);
          }
}
