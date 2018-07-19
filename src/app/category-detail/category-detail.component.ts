import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../redux/app.reducer';
import { Category } from '../../redux/category/category.model';
import { Article } from '../../redux/article/article.model';
import { getAllCategories } from '../../redux/category/category.selectors';
import { getAllArticles } from '../../redux/article/article.selectors';

@Component({
  selector: 'category-detail',
<<<<<<< HEAD
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
=======
  templateUrl: './category-detail.component.html'
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
})
export class CategoryDetailComponent implements OnInit {
  category: Category;
  articles: Article[];
<<<<<<< HEAD
  displayedColumns: string[] = ['id', 'name'];
=======
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
  categoryId = null;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.readParams();
    this.readCategoryState();
    this.readArticlesState();
  }

  ngOnInit() {
  }

  private readCategoryState() {
    this.store.select(getAllCategories)
    .subscribe(categories => {
      this.category = categories.find(c => c.id === parseInt(this.categoryId));
    });
  }

  private readArticlesState() {
    this.store.select(getAllArticles)
    .subscribe(articles => {
      this.articles = articles.filter(a => a.category === this.categoryId);
    });
  }

  private readParams() {
    this.route.params
      .subscribe(params => {
        this.categoryId = parseInt(params.id);
      });
  }
}