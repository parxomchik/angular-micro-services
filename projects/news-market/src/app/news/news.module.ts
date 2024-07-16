import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { ShareModule } from '../share/share.module';
import { NewsArticleComponent } from './components/news-article/news-article.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsArticleComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ShareModule
  ]
})
export class NewsModule { }
