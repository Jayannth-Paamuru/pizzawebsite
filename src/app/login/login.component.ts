import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http:HttpClient)
  {

  }
responsedata:any

  getdata(f:any)
  {
    this.http.get("http://localhost:3000/user/"+f.user).subscribe((data:any)=>
    {
      this.responsedata = data
    })
    console.log(this.responsedata)
  }
}
