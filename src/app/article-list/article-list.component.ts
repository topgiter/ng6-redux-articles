import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../redux/app.reducer';
import { Article } from '../../redux/article/article.model';
import { Category } from '../../redux/category/category.model';
import { getAllArticles } from '../../redux/article/article.selectors';
import { getAllCategories } from '../../redux/category/category.selectors';
import * as ArticleActions from './../../redux/article/article.actions';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{
  articles: Article[] = [];
  categories: Category[] = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.readArticlesState();
    this.readCategoriesState();
  }

  ngOnInit() {
  }

  private readArticlesState() {
    this.store.select(getAllArticles)
    .subscribe(articles => {
      this.articles = articles;
    });
  }

  private readCategoriesState() {
    this.store.select(getAllCategories)
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  public onSelectCategory(articleId, categoryId) {
    const action = new ArticleActions.AssginCategoryAction(articleId, categoryId);
    this.store.dispatch(action);
  }
}