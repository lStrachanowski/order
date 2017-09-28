import { Component, OnInit,AfterContentChecked,Output,EventEmitter } from '@angular/core';
import{Order} from '../order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit,AfterContentChecked{
  companyInput: string;
  loadingPlaceInput: string;
  deliveryInput: string;
  frachtRateInput: number=0;
  carrierRateInput: number =0;
  difference : number ;
  @Output() outData = new EventEmitter<Order>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
    this.difference = this.frachtRateInput-this.carrierRateInput;
  }

  addOrderFunction() {
    let newOrder = new Order(this.companyInput,this.loadingPlaceInput,this.deliveryInput,this.frachtRateInput,this.carrierRateInput);
    this.outData.emit(newOrder);
  }
}
