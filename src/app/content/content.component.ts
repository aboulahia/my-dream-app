import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  array=[];
  constructor() { 
  
  }

  ngOnInit() {
   
  }
  handleClick(name : string , price :string) {
    
    let priceWithTH = parseFloat(price) + parseFloat(price)*18 /100;
    
    if( isNaN(priceWithTH)) {priceWithTH=0}

    this.array.push({name,priceWithTH});
    console.log(this.array)
  }

  filter(filter : string) {
    console.log(filter)
    this.array= this.array.filter(e => JSON.stringify(e).includes(filter));
    console.log(this.array)
  }
}
