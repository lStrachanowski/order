import { Order } from '../order.model';
export class OrderDataService {


  orderlist = [{orderNumber:1, company:"DSV", loadingPlace:"Katowice", deliveryPlace:"Madryt", frachtRate:2500, carrierRate:2000},
  {orderNumber:2, company:"Schenker", loadingPlace:"Hamburg", deliveryPlace:"Rome", frachtRate:1750, carrierRate:1650},
  {orderNumber:3, company:"DHL", loadingPlace:"Rzym", deliveryPlace:"Praga", frachtRate:4500, carrierRate:3850},
  {orderNumber:4, company:"DSV", loadingPlace:"Ateny", deliveryPlace:"Katowice", frachtRate:550, carrierRate:450}];

  orderNr: number = this.orderlist.length;

  highestProfit(opt:string){
    if(this.orderlist.length > 0){
      var val = this.orderlist[0].frachtRate - this.orderlist[0].carrierRate;
      if(opt === 'max' ){
        for (var i = 0; i<this.orderlist.length;i++){
          var diff = this.orderlist[i].frachtRate - this.orderlist[i].carrierRate;
          if(diff > val ){
            val = diff ;
          }
        }
        return val;
      }

      if(opt === 'min'){
        for (var i = 0; i<this.orderlist.length;i++){
          var diff = this.orderlist[i].frachtRate - this.orderlist[i].carrierRate;
          if(diff < val ){
            val = diff ;
          }
        }
        return val;
      }
    }


  }

  profitSum(){
    let sum = 0;
    for (var i = 0; i<this.orderlist.length;i++){
      var diff = this.orderlist[i].frachtRate - this.orderlist[i].carrierRate;
        sum = sum + diff;
    }
    return sum;
  }

  addOrder(inData: Order) {
    this.orderlist.push(inData);
  }

  nrOfOrders(){
    console.log(this.orderlist.length);
    return this.orderlist.length;
  }

  orderCount() {
    this.orderNr++;
    return this.orderNr;
  }

  deleteOrder(id: number) {

    if (this.orderlist.length === 1) {
      this.orderlist.splice(0, 1);
      this.orderNr = 0;
    } else {
      for (var i = 0; i < this.orderlist.length; i++) {
        if (this.orderlist[i].orderNumber === id) {
          this.orderlist.splice(i, 1);
        }
      }
    }
  }

}
