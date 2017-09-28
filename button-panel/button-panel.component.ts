import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent implements OnInit {
@Output() status = new EventEmitter<boolean>();
check:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addFunction(){
    if(this.check == false){
      this.check = true;
      this.status.emit(this.check);
    }

  }

  removeFunction(){
    if(this.check == true){
      this.check = false;
      this.status.emit(this.check);
    }
  }
}
