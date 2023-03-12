import {
  countIncrement,
  countReduction,
  countReset,
} from './../../../store/actions/counter.actions';
import { CountService } from './../../../services/count.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css'],
})
export class AddCountComponent {
  number: number = 0;
  @Output() myEvent = new EventEmitter<any>();
  constructor(private countService: CountService, private store: Store<any>) {}

  ngOnInit(): void {}
  addCount() {
    this.number++;
    this.myEvent.emit(this.number);
  }
  subtractCount() {
    this.number -= 1;
    if (this.number < 0) {
      this.number = 0;
    }
    this.myEvent.emit(this.number);
  }
  resetCount() {
    this.number = 0;
    this.myEvent.emit(this.number);
  }

  addCountService() {
    this.countService.number2++;
  }
  subtractCountService() {
    this.countService.number2 -= 1;
    if (this.countService.number2 < 0) {
      this.countService.number2 = 0;
    }
  }
  resetCountService() {
    this.countService.number2 = 0;
  }

  addCountNgrx() {
    this.store.dispatch(countIncrement());
  }
  subtractCountNgrx() {
    this.store.dispatch(countReduction());
  }
  resetCountNgrx(){
   this.store.dispatch(countReset())
  }
}
