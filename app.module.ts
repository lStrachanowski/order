import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { DisplayComponent } from './display/display.component';
import { BackcolorDirective } from './backcolor.directive';
import { FontsizeDirective } from './fontsize.directive';
import {OrderDataService} from './shared/orderData.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPanelComponent,
    OrderFormComponent,
    OrderItemComponent,
    DisplayComponent,
    BackcolorDirective,
    FontsizeDirective

  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [OrderDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
