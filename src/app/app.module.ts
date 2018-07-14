import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from '../redux/app.reducer';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import {
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';

const routes: Routes = [
  { path: '', component: ArticleListComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category/:id/edit', component: CategoryEditComponent },
  { path: 'category/:id/detail', component: CategoryDetailComponent },
  // { path: ':filter', component: TodoListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
