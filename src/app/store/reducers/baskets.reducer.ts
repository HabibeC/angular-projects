import { createReducer, on, createAction, props } from '@ngrx/store';
import { BasketModel } from 'src/app/components/models/basket.model';
import * as BasketActions from '../actions/baskets.actions'

export const initialState: BasketModel[]=[]
export const BasketsReducer = createReducer(
  initialState,
  on(
    BasketActions.addBasket,
    (state, { basket }) => {
      return { ...state, basket };
    }
  )
);
