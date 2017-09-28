export class Order{
  public company:string;
  public loadingPlace:string;
  public deliveryPlace:string;
  public frachtRate:number;
  public carrierRate:number;
  constructor(company:string,loadingPlace:string,deliveryPlace:string, frachtRate:number,carrierRate:number){
    this.company = company;
    this.loadingPlace = loadingPlace;
    this.deliveryPlace = deliveryPlace;
    this.frachtRate = frachtRate;
    this.carrierRate = carrierRate;
  }
}
