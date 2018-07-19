import { Action } from '@ngrx/store';
import { Article } from './article.model';

export const POPULATE_ARTICLES  = '[ARTICLE] populate';
export const ASSIGN_CATEGORY    = '[ARTICLE] assign category';
<<<<<<< HEAD
export const LOAD_ARTICLES      = '[ARTICLE] load';
=======
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd

export class PopulateArticlesAction implements Action {
  readonly type = POPULATE_ARTICLES;

  constructor(
    public articles: Article[]
  ) {}
}

export class AssginCategoryAction implements Action {
  readonly type = ASSIGN_CATEGORY;

  constructor(
    public id: number,
    public category: number
  ) {}
}

<<<<<<< HEAD
export class LoadArticlesAction implements Action {
  readonly type = LOAD_ARTICLES;

  constructor (
    public articles: Article[]
  ) {}
}
export type ArticleActionType =
PopulateArticlesAction |
AssginCategoryAction |
LoadArticlesAction;
=======
export type ArticleActionType =
PopulateArticlesAction |
AssginCategoryAction;
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
