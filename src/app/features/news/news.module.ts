import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { Routes, RouterModule } from '@angular/router';
import { PageType } from '../../../enumerations';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    data: {page_type: PageType.list}
  },
  {
    path: ':id',
    component: NewsComponent,
    data: {page_type: PageType.detail}
  }
];


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
