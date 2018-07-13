import { Action } from '@ngrx/store';
import { Category } from './category.model';

export const ADD_CATEGORY    = '[CATEGORY] add';
export const DELETE_CATEGORY = '[CATEGORY] delete';
export const UPDATE_CATEGORY = '[CATEGORY] update';
export const POPULATE_CATEGORIES  = '[CATEGORY] populate';

export class AddCategoryAction implements Action {
  readonly type = ADD_CATEGORY;
  public id: number;

  constructor(
    public name: string
  ) {
    this.id = Math.floor(Math.random() * 1000000) + 1;
  }
}

export class PopulateCategoriesAction implements Action {
  readonly type = POPULATE_CATEGORIES;

  constructor(
    public categories: Category[]
  ) {}
}

export class DeleteCategoryAction implements Action {
  readonly type = DELETE_CATEGORY;

  constructor(
    public id: number
  ) {}
}

export class UpdateCategoryAction implements Action {
  readonly type = UPDATE_CATEGORY;

  constructor(
    public id: number,
    public name: string,
  ) {}
}

export type CategoryActionType =
AddCategoryAction |
PopulateCategoriesAction |
DeleteCategoryAction |
UpdateCategoryAction;