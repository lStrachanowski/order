export class Order{
  public orderNumber:number;
  public company:string;
  public loadingPlace:string;
  public deliveryPlace:string;
  public frachtRate:number;
  public carrierRate:number;
  constructor(orderNumber:number, company:string,loadingPlace:string,deliveryPlace:string, frachtRate:number,carrierRate:number){
    this.orderNumber = orderNumber;
    this.company = company;
    this.loadingPlace = loadingPlace;
    this.deliveryPlace = deliveryPlace;
    this.frachtRate = frachtRate;
    this.carrierRate = carrierRate;
  }
}
