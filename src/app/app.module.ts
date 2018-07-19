import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from '../redux/app.reducer';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
<<<<<<< HEAD
import { NewsService } from './app.service';
=======
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd

import {
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';

<<<<<<< HEAD
=======
const routes: Routes = [
  { path: '', component: ArticleListComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category/:id/edit', component: CategoryEditComponent },
  { path: 'category/:id/detail', component: CategoryDetailComponent },
  // { path: ':filter', component: TodoListComponent }
];

>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
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
<<<<<<< HEAD
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    HttpModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    NewsService
=======
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
>>>>>>> a668370d4825594311f66255b837b209ebd1c2cd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
