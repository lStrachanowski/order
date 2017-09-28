import { Component, OnInit,Input,AfterContentChecked } from '@angular/core';
import {Order} from '../order.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() displayContent : Order;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    if(this.displayContent === undefined){
      this.displayContent = {company:"click on list",loadingPlace:"click on list",deliveryPlace:"click on list",frachtRate:0,carrierRate:0};
    }
  }

}
