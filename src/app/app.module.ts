import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { TabBtnComponent } from './components/tab-btn/tab-btn.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TabBtnComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
