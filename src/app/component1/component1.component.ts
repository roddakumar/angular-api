import { Component, OnInit } from '@angular/core';
import {ServiceforgitService} from '../serviceforgit.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers:[ServiceforgitService]
})
export class Component1Component implements OnInit {
user :any;
  constructor(private e: ServiceforgitService) { 
    this.e.getData().
    subscribe(
      data => {
this.user = data;
console.log(this.user);
      }
    );}

  ngOnInit() {
  }
  
}
