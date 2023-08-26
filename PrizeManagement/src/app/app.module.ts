import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // for template-driven forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { GroupsPageComponent } from './components/groups-page/groups-page.component';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { PickListModule } from 'primeng/picklist';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AppComponent,
    ItemPageComponent,
    NavbarComponent,
    GroupsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeTableModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    DialogModule,
    CalendarModule,
    FormsModule,
    PickListModule,
    InputNumberModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
