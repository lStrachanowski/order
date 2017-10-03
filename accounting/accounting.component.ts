import { Component, OnInit,AfterContentChecked,DoCheck } from '@angular/core';
import {Order} from '../order.model';
import {OrderDataService} from '../shared/orderData.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {

numberOfOrders:number;
profit:number;
max:number;
min:number;
  constructor(private orderData:OrderDataService) { }

  ngOnInit() {
    this.numberOfOrders = this.orderData.nrOfOrders();
    this.profit = this.orderData.profitSum();
    this.max = this.orderData.highestProfit('max');
    this.min = this.orderData.highestProfit('min');
  }
  ngAfterContentChecked(){
    this.numberOfOrders = this.orderData.nrOfOrders();
    this.profit = this.orderData.profitSum();
    this.max = this.orderData.highestProfit('max');
    this.min = this.orderData.highestProfit('min');
  }
  ngDoCheck(){
    this.numberOfOrders = this.orderData.nrOfOrders();
  }

}
