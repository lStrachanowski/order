import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPanelComponent,
    OrderFormComponent,
    OrderItemComponent,
    DisplayComponent

  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
