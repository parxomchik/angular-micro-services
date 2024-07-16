import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_ARTICLES } from '../mocks/articles.mock';

@Injectable({
  providedIn: 'root'
})
export class MarketNewsService {
  constructor() {}

  public getArticles(): Observable<any[]> {
    return of(MOCK_ARTICLES);
  }

  public searchArticles(ticker: string): Observable<any[]> {
    const filteredArticles = MOCK_ARTICLES.filter(article => article.ticker.toLowerCase() === ticker.toLowerCase());
    return of(filteredArticles);
  }

  public getArticleById(id: number): Observable<any> {
    const article = MOCK_ARTICLES.find(article => article.id === id);
    return of(article);
  }
}
