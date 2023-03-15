import { BasketsReducer } from './store/reducers/baskets.reducer';
import { CounterReducer } from './store/reducers/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AddCountComponent } from './components/ngrx/add-count/add-count.component';
import { CountComponent } from './components/ngrx/count/count.component';
import { MainCountComponent } from './components/ngrx/main-count/main-count.component';
import { NavbarComponent } from './components/e-commerce/navbar/navbar.component';
import { LayoutsComponent } from './components/e-commerce/layouts/layouts.component';
import { HomeComponent } from './components/e-commerce/home/home.component';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCountComponent,
    CountComponent,
    MainCountComponent,
    NavbarComponent,
    LayoutsComponent,
    HomeComponent,
    SelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      number3: CounterReducer,
      baskets: BasketsReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
