import { countIncrement } from './../actions/counter.actions';
import { createReducer, on } from '@ngrx/store';

export const initialCount = 0;
export const CounterReducer = createReducer(
  initialCount,
  on(countIncrement, (state) => state+=1)
);
