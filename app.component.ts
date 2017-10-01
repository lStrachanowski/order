import { Component, Output, EventEmitter } from '@angular/core';
import { Order } from './order.model';
import {OrderDataService} from './shared/orderData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OrderApp';

  ordersArr: Order[];
  currOrder: Order;
  showForm: boolean = false;

  constructor(private orderData:OrderDataService) {
    this.ordersArr = this.orderData.orderlist;
  }

  pushData(inData: Order) {
    this.orderData.addOrder(inData);
  }

  displayData(order: Order) {
    this.currOrder = order;
  }

  showHide(ev) {
    this.showForm = ev;
  }
}
