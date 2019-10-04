import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  constructor(private apiService : ApiService) {


  }

  ngOnInit() {

  }
  handleClick(name: string, price: string) {

    let priceWithTH = parseFloat(price) + parseFloat(price) * 18 / 100;

    if (isNaN(priceWithTH)) { priceWithTH = 0 }

    this.apiService.array.push({ name, priceWithTH });
    console.log(this.apiService.array)
  }

  filter(filter: string) {
    console.log(filter)
    this.apiService.array = this.apiService.array.filter(e => JSON.stringify(e).includes(filter));
    console.log(this.apiService.array)
  }

  aboutItem(item : String,index :number){
      this.apiService.index=index;
      console.log(this.apiService.index)
  }
}
