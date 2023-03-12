import { Store } from '@ngrx/store';
import { CountService } from './../../../services/count.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent {
  @Input() number: number = 0;
  number3$: Observable<number>;
  constructor(
    public countService: CountService,
    private store: Store<{ number3: number }>
  ) {
    this.number3$ = this.store.select('number3');
  }

  ngOnInit(): void {}
}
