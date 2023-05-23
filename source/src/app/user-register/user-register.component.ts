import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  private url = "http://localhost:8080/user/register";

  constructor(public http: HttpClient) { }
  ngOnInit() {
  }

  register() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url,
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
    var api = 'http://localhost:8080/greeting';
    this.http.get(`${api}`).subscribe((response: any) => {
      window.alert(response.name);
    });
  }

  loginCorrect(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post("http://localhost:8080/user/login",
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
    this.http.post("http://localhost:8080/user/login",
      {
        username: 'new-user',
        password: "wrong-password",
      }, httpOptions).subscribe((response: any) => {
        window.alert(response.message);
      });
  }

  getAllUsers() {
    this.http.get("http://localhost:8080/user/all").subscribe((response: any) => {
      window.alert(JSON.stringify(response));
    });
  }


}