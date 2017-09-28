import { Component, Output, EventEmitter } from '@angular/core';
import { Order } from './order.model';

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

  constructor() {
    this.ordersArr = [new Order("DSV", "Katowice", "Madryt", 2500, 2000),
    new Order("Schenker", "Hamburg", "Rome", 1750, 1650)];
  }

  pushData(inData: Order) {
    this.ordersArr.push(inData);
  }

  displayData(order: Order) {
    this.currOrder = order;
  }

  showHide(ev) {
    this.showForm = ev;
  }
}
