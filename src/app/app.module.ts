import { CounterReducer } from './store/reducers/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AddCountComponent } from './components/ngrx/add-count/add-count.component';
import { CountComponent } from './components/ngrx/count/count.component';
import { MainCountComponent } from './components/ngrx/main-count/main-count.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCountComponent,
    CountComponent,
    MainCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({number3:CounterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
