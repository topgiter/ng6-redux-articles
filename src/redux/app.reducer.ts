import { ActionReducerMap } from '@ngrx/store';

import { ArticlesReducer } from './article/article.reducer';
import { Article } from './article/article.model';
import { Category } from './category/category.model';
import { CategoriesReducer } from './category/category.reducer';

export interface AppState {
  articles: Article[];
  categories: Category[];
}

export const rootReducer: ActionReducerMap<AppState> = {
  categories: CategoriesReducer,
  articles: ArticlesReducer
};
