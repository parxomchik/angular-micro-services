import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: ':id', component: NewsArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
