import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
data:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  displayInfo()
  {
    this.http.get('http://localhost:3000/customer').subscribe(data =>{console.log(data);});
  }


  insertInfo(){
    const req= this.http.post('http://localhost:3000/customer',
  {
    "cust_name": "vidhya",
    "cust_id":"004",
    "cust_address": "tiruvallur street",
    "location": "chennai",
    "landmark" : "tiruvallur",
    "ph_no" : 90812345
  })
  .subscribe(
    res=> { console.log(res);
     console.log( 'Customer is added to the database');},
     err=> { console.log("error occured");}
  ); 

    }

 editInfo() {
  this.http.put('http://localhost:3000/customer/004',
  {
    "cust_name": "vidhyalakshmi",
    "cust_id":"004",
    "cust_address": "tiruvallur street",
    "location": "chennai",
    "landmark" : "tiruvallur",
    "ph_no" : 90812345})
  .subscribe(
   res=> { console.log(res);
    console.log( 'Customer is edited  in the database');},
   err=> { console.log("error occured");}
  );}


delInfo(){
  this.http.delete('http://localhost:3000/customer/004')
  .subscribe(
   res=> { console.log(res);
    console.log( 'Customer is deleted in the database'); },
   err=> { console.log("error occured");}
  );
 }
 } 
 



  
  

 
