import { CountService } from './../../../services/count.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  @Input() number: number = 0;
  constructor(public countService:CountService) {}

  ngOnInit(): void {}

}
