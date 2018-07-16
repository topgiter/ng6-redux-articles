import { Article } from './article.model';
import * as ArticleActions from './article.actions';

const initialState: Article[] = [];

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
    case ArticleActions.LOAD_ARTICLES: {
      return action.articles
    }
    default: {
      return state;
    }
  }
}
