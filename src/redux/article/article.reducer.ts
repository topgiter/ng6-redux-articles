import { Article } from './article.model';
import * as ArticleActions from './article.actions';

<<<<<<< HEAD
const initialState: Article[] = [];
=======
const initialState: Article[] = [
  { id: 1, name: 'Article 1', category: null },
  { id: 2, name: 'Article 2', category: null }
];
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd

export function ArticlesReducer(state: Article[] = initialState, action: ArticleActions.ArticleActionType) {
  switch (action.type) {
    case ArticleActions.POPULATE_ARTICLES: {
      return action.articles;
    }
    case ArticleActions.ASSIGN_CATEGORY: {
      return state.map(article => {
        if (article.id === action.id) {
          return {
            ...article,
            category: action.category
          };
        }

        return article;
      })
    }
<<<<<<< HEAD
    case ArticleActions.LOAD_ARTICLES: {
      return action.articles
    }
=======
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
    default: {
      return state;
    }
  }
}
