import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    array ;
    index;
  constructor() { 
    this.index=0;
    this.array = [
      {name : "HP" , priceWithTH :1420},
      {name : "TV" , priceWithTH :1420},
      {name : "Phone" , priceWithTH :1420},
    ];
  }
}
