import { BasketModel } from 'src/app/components/models/basket.model';
import { createAction, props } from '@ngrx/store';
export const addBasket=createAction(
    "[Basket] Add Basket",
    props<{"basket":BasketModel}>()
)