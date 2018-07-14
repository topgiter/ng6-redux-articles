import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../redux/app.reducer';
import { Category } from '../../redux/category/category.model';
import { getAllCategories } from '../../redux/category/category.selectors';
import * as CategoryActions from './../../redux/category/category.actions';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  categoryId: number = null;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.readParams();
    this.readCategoryState();
  }

  ngOnInit() {
  }

  private readCategoryState() {
    this.store.select(getAllCategories)
    .subscribe(categories => {
      this.category = categories.find(c => c.id === this.categoryId);
    });
  }

  private readParams() {
    this.route.params
      .subscribe(params => {
        this.categoryId = parseInt(params.id);
      });
  }

  public updateCategory() {
    if (this.category.name.trim().length === 0) return;

    const action = new CategoryActions.UpdateCategoryAction(this.category.id, this.category.name.trim());
    this.store.dispatch(action);
    this.router.navigate(['/categories']);
  }
}