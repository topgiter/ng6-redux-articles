import { Action } from '@ngrx/store';
import { Article } from './article.model';

export const POPULATE_ARTICLES  = '[ARTICLE] populate';
export const ASSIGN_CATEGORY    = '[ARTICLE] assign category';

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

export type ArticleActionType =
PopulateArticlesAction |
AssginCategoryAction;