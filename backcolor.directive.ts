import { Directive,OnInit,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackcolor]'
})
export class BackcolorDirective implements OnInit{

@Input() bColor = "#CEECEF";
@HostBinding('style.backgroundColor') backgroundCol : string;

  constructor() {
  }
  ngOnInit(){
    this.backgroundCol = this.bColor;
  }

}
