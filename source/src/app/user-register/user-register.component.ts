import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  private registerUrl = "/api/user/register";
  private loginUrl = "/api/user/login";
  private greetUrl = "/api/greeting";
  private lsUrl = "/api/user/all";

  constructor(public http: HttpClient) { }
  ngOnInit() {
  }

  register() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.registerUrl,
      {
        username: 'abc',
        password: "123456",
        email: "a@b.com",
        phone: "12345678900"
      }, httpOptions).subscribe((response: any) => {
        window.alert(response.message);
      });
  }


  greeting() {
    this.http.get(this.greetUrl).subscribe((response: any) => {
      window.alert(response.name);
    });
  }

  loginCorrect(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.loginUrl,
      {
        username: 'new-user',
        password: "123456",
      }, httpOptions).subscribe((response: any) => {
        window.alert(response.message);
      });
  }

  loginWrong() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.loginUrl,
      {
        username: 'new-user',
        password: "wrong-password",
      }, httpOptions).subscribe((response: any) => {
        window.alert(response.message);
      });
  }

  getAllUsers() {
    this.http.get(this.lsUrl).subscribe((response: any) => {
      window.alert(JSON.stringify(response));
    });
  }


}