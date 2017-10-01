import { Order } from '../order.model';
export class OrderDataService {


  orderlist = [new Order(1, "DSV", "Katowice", "Madryt", 2500, 2000),
  new Order(2, "Schenker", "Hamburg", "Rome", 1750, 1650),
  new Order(3, "DHL", "Rzym", "Praga", 4500, 3850),
  new Order(4, "DSV", "Ateny", "Katowice", 550, 450)];

  orderNr: number = this.orderlist.length;
  addOrder(inData: Order) {
    this.orderlist.push(inData);
  }

  orderCount() {
    this.orderNr++;
    return this.orderNr;
  }

  deleteOrder(id:number){

    if(this.orderlist.length === 1){
      this.orderlist.splice(0,1);
      this.orderNr = 0;
    }else{
      for(var i = 0; i<this.orderlist.length; i++){
        if(this.orderlist[i].orderNumber === id){
          this.orderlist.splice(i,1);
        }
      }
    }
  }

}
