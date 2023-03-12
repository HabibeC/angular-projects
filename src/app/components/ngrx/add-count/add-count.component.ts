import { CountService } from './../../../services/count.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css'],
})
export class AddCountComponent {
  number: number = 0;
  @Output() myEvent = new EventEmitter<any>();
  constructor(private countService: CountService) {}

  ngOnInit(): void {}
  addCount() {
    this.number++;
    this.myEvent.emit(this.number);
  }

  addCountService() {
    this.countService.number2++;
  }
}
