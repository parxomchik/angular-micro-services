import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/containers/home-page/home-page.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  pathMatch: 'full'
}, {
  path: 'news-market',
  loadChildren: () => import('news-market/Module').then(m => m.NewsModule)
}, {
  path: 'news-symbol',
  loadChildren: () => import('news-symbol/Module').then(m => m.NewsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
