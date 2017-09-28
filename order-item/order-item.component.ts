import { Component, OnInit,Input} from '@angular/core';
import {Order} from '../order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
@Input() orderListArr : {company:string,loadingPlace:string,deliveryPlace:string,frachtRate:number,carrierRate:number};

  constructor() { }

  ngOnInit() {
  }


}
