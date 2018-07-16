import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.reducer';
import { Category } from '../../redux/category/category.model';
import { getAllCategories } from '../../redux/category/category.selectors';
import * as CategoryActions from './../../redux/category/category.actions';

@Component({
  selector: 'categroy-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  categoryName: string = '';
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private store: Store<AppState>,
  ) {
    this.readCategoriesState();
  }

  ngOnInit() {
  }

  private readCategoriesState() {
    this.store.select(getAllCategories)
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  public createCategory() {
    if (this.categoryName.length === 0 || this.categoryName.trim().length === 0) return;

    const action = new CategoryActions.AddCategoryAction(this.categoryName.trim());
    this.store.dispatch(action);
    this.categoryName = '';
  }

  public deleteCategory(id) {
    const action = new CategoryActions.DeleteCategoryAction(id);
    this.store.dispatch(action);
  }
}
