import { Directive,OnInit,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appFontsize]'
})
export class FontsizeDirective implements OnInit{
@Input() fSize = '26px';
@HostBinding('style.fontSize')  fontSizeValue : string;
  constructor() { }

  ngOnInit(){
    this.fontSizeValue = this.fSize;
  }
}
