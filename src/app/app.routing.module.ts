import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const routes: Routes = [
    { path: '', component: ArticleListComponent, pathMatch: 'full' },
    { path: 'categories', component: CategoryListComponent },
    { path: 'category/:id/edit', component: CategoryEditComponent },
    { path: 'category/:id/detail', component: CategoryDetailComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }