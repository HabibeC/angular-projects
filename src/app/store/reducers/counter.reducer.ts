import { countIncrement, countReduction, countReset } from './../actions/counter.actions';
import { createReducer, on } from '@ngrx/store';

export const initialCount = 0;
export const CounterReducer = createReducer(
  initialCount,
  on(countIncrement, (state) => (state + 1)),
  on(countReduction, (state) => (state - 1)),
  on(countReset, (state) => (state = 0))
);