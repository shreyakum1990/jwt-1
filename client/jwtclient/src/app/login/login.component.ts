import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private user : any = {};
  constructor(private httpclient : HttpClient) { }

  ngOnInit() {
  }

  checkLogin(){
    console.log('The data is',this.user)
    this.httpclient.post("http://localhost:3000/api",this.user).subscribe(
      (res)=>{
        console.log('The response is',res)
      },
      (err)=>{
        console.log('The error is',err)
      }
    )
  }

}
