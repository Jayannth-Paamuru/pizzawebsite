import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  responsivedata:any
  constructor(public e:Router, private http:HttpClient)
  {
    this.getstate()
  }

  msg:string=""
  err:string=""
  password:any=""
  confrim:any=""
  x:boolean=false
  validate()
  {
    var pass=(document.getElementById("pass") as HTMLInputElement).value 
    var conpass=(document.getElementById("cpass") as HTMLInputElement).value 

    this.password = pass
    this.confrim = conpass
    // document.writeln(frm.user+"::"+frm.pass)
    if(this.password == this.confrim)
    { 
      
      this.msg="password matches"
    }
    else
    {
      // document.write("Invalid credentials")
      alert("Invalid credentials")
      this.err="Invalid"
    }
  }

  id:any
  passg:any
  display()
  {
    var emailid=(document.getElementById("email") as HTMLInputElement).value
    var pass=(document.getElementById("pass") as HTMLInputElement).value
    const user={
      id :emailid,
      passg :pass
    }
    this.http.post("http://localhost:3000/user",user).subscribe((res)=>
    {
      console.log(res)
    })
    emailid=(document.getElementById("email") as HTMLInputElement).value=""
    pass=(document.getElementById("pass") as HTMLInputElement).value=""
    this.e.navigate(['login'])
  }


  items:any
  getstate()
  {
    this.http.get("http://localhost:3000/states").subscribe((data:any)=>
    {
      this.items = data;
      console.log(this.items)
      console.log(data);
      
    })
  }
 
}

  