import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzakottu';
  // responsivedata:any
  // constructor(private http:HttpClient)
  // {

  // }
  // getdata()
  // {
  //   this.http.get("http://localhost:3000/user").subscribe((data)=>
  //   {
  //     this.responsivedata = data
  //     console.log(data)
  //   })
  // }
  // postdata()
  // {
  //   const user={
  //     id:"6",
  //     Totalmarks:"1001"
  //   }
  //   this.http.post("http://localhost:3000/user", user).subscribe((res)=>console.log(res))
  // }

  // putdata()
  // {
  //   const user = {
  //     id:"4",
  //     Totalmarks:"500"
  //   }

  //   this.http.put("http://localhost:3000/user/4", user).subscribe((res)=>
  //   {
  //     console.log("updated")
  //   })
  // 

}
