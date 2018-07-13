import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { Category } from './category.model';

export const getCategories = (state: AppState) => state.categories;

export const getAllCategories = createSelector(getCategories, (categories) => {
  return categories;
});