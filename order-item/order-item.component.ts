import { Component, OnInit,Input} from '@angular/core';
import {Order} from '../order.model';
import {OrderDataService} from '../shared/orderData.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
@Input() orderListArr : {orderNumber:number,company:string,loadingPlace:string,deliveryPlace:string,frachtRate:number,carrierRate:number};

  constructor(private orderData:OrderDataService) { }

  ngOnInit() {
  }

  delOrder(id:number){
    console.log(id);
    this.orderData.deleteOrder(id);
  }


}
