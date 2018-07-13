import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { Article } from './article.model';

export const getArticles  = (state: AppState) => state.articles;

export const getAllArticles = createSelector(getArticles, (articles) => {
  return articles;
});