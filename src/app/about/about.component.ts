import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {AppRoutingModule} from '../app-routing.module'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
index;
  constructor(private apiService : ApiService, private route : ActivatedRoute) {
    // this.index=apiService.index;
   }

  ngOnInit() {
    this.index=this.route.snapshot.params.id;
  }

}
