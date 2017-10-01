import { Component,AfterContentChecked} from '@angular/core';
import{Order} from '../order.model';
import {OrderDataService} from '../shared/orderData.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements AfterContentChecked{

  companyInput: string;
  loadingPlaceInput: string;
  deliveryInput: string;
  frachtRateInput: number=0;
  carrierRateInput: number =0;
  difference : number ;

  constructor(private orderData:OrderDataService) { }

  ngAfterContentChecked(){
    this.difference = this.frachtRateInput-this.carrierRateInput;
  }

  addOrderFunction() {
    let newOrder = new Order(this.orderData.orderCount(),this.companyInput,this.loadingPlaceInput,this.deliveryInput,this.frachtRateInput,this.carrierRateInput);
    this.orderData.addOrder(newOrder);
  }
}
