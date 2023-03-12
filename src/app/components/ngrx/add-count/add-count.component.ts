import { countIncrement } from './../../../store/actions/counter.actions';
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
  constructor(private countService: CountService, 
    private store: Store<any>) {}

  ngOnInit(): void {}
  addCount() {
    this.number++;
    this.myEvent.emit(this.number);
  }

  addCountService() {
    this.countService.number2++;
  }

  addCountNgrx(){
    this.store.dispatch(countIncrement())
  }
}
