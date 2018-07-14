import { Category } from './category.model';
import * as CategoryActions from './category.actions';

const initialState: Category[] = [
  // { id: 1, name: 'Category 1' },
  // { id: 2, name: 'Category 2' },
];

export function CategoriesReducer(state: Category[] = initialState, action: CategoryActions.CategoryActionType) {
  switch (action.type) {
    case CategoryActions.ADD_CATEGORY: {
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    }
    case CategoryActions.DELETE_CATEGORY: {
      return state.filter(category => action.id !== category.id );
    }
    case CategoryActions.UPDATE_CATEGORY: {
      return state.map(c => {
        if (c.id === action.id) {
          return {
            ...c,
            ...action
          };
        }

        return c;
      });
    }
    case CategoryActions.POPULATE_CATEGORIES: {
      return action.categories;
    }
    default: {
      return state;
    }
  }
}
