import { Component } from '@angular/core';

@Component({
  selector: 'app-main-count',
  templateUrl: './main-count.component.html',
  styleUrls: ['./main-count.component.css'],
})
export class MainCountComponent {
  number: number = 0;
  constructor() {}

  ngOnInit(): void {}
  addCount(event: number) {
    this.number = event;
  }
}
