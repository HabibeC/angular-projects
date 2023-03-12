import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css'],
})
export class AddCountComponent {
  number: number = 0;
  @Output() myEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  addCount() {
    this.number++;
    this.myEvent.emit(this.number);
  }
}
