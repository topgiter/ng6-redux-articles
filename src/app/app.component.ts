<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.reducer';
import { Router } from '@angular/router';
import { NewsService } from './app.service';
import { throwError } from 'rxjs';
import { Article } from '../redux/article/article.model';
import * as ArticleActions from '../redux/article/article.actions';
=======
import { Component } from '@angular/core';
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD

export class AppComponent implements OnInit {
  navLinks: any[];
  activeLinkPath = './';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private newsService: NewsService
  ) {
  
    this.navLinks = [
        {
          label: 'Article List',
          path: '/',
          index: 0
        }, {
          label: 'Category List',
          path: '/categories',
          index: 1
        }
    ];
  }

  ngOnInit(): void {
    const that = this;
    this.router.events.subscribe((res) => {
      that.activeLinkPath = res['url'];
    });

    this.newsService.getNews().subscribe(
      data => {
        const articles: Article[] = data[0]['articles'].map((a, index) => ({
          id: index,
          name: a.title,
          url: a.url
        }));
        
        const action = new ArticleActions.LoadArticlesAction(articles);
        this.store.dispatch(action);
        return true;
      },
      error => {
        console.error("Error loading news");
        return throwError(error);
      }
    )
  }
}
=======
export class AppComponent {
}
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
