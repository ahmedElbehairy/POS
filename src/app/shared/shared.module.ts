import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RightSideComponent } from './right-side/right-side.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddProComponent } from './add-pro/add-pro.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintOrderComponent } from './print-order/print-order.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { NgSelectModule } from "@ng-select/ng-select";
import { AlertPopupComponent } from './alert-popup/alert-popup.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    SnackBarComponent,
    SideMenuComponent,
    RightSideComponent,
    CardComponent,
    AddProComponent,
    AlertPopupComponent,
    PrintOrderComponent,
    InputSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MatAutocompleteModule,
    NgSelectModule,
    NgbRatingModule,
    RouterModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthPageComponent,
    SnackBarComponent,
    SideMenuComponent,
    RightSideComponent,
    CardComponent,
    AddProComponent,
    AlertPopupComponent,
    InputSelectComponent,
    PrintOrderComponent,
  ],
})
export class SharedModule {}
