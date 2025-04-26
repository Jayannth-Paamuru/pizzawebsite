import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  standalone: false,
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {
  // items:any
  // constructor(private http:HttpClient)
  // {
  //   this.getpizza()
  // }
  // getpizza()
  // {
  //   this.http.get("http://localhost:3000/products").subscribe((data:any)=>
  //   {
  //     this.items = data;
  //     console.log(this.items)
  //     console.log(data);
      
  //   })
  // }
q:number=0
id:string=""
pname:string=""
price:number=0
description:string=""
pimage:string=""
constructor(public ob:ActivatedRoute)
{
  ob.queryParams.subscribe(data =>
  {
    this.id = data['id'],
    this.pname = data['name'],
    this.description = data['description'],
    this.price = data['price'],
    this.pimage = data['image']
  }
  )
}

}
    
