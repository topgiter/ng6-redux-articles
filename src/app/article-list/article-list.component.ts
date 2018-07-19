import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { Store } from '@ngrx/store';
=======
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
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
<<<<<<< HEAD

export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'category'];
  
  constructor(
    private store: Store<AppState>,
=======
export class ArticleListComponent implements OnInit{
  articles: Article[] = [];
  categories: Category[] = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
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