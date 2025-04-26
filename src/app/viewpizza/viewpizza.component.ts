import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewpizza',
  standalone: false,
  templateUrl: './viewpizza.component.html',
  styleUrl: './viewpizza.component.css'
})
export class ViewpizzaComponent {

  items:any
  constructor(private http:HttpClient)
  {
    this.getpizza()
  }
  getpizza()
  {
    this.http.get("http://localhost:3000/products").subscribe((data:any)=>
    {
      this.items = data;
      console.log(this.items)
      console.log(data);
      
    })
  }
 
}
