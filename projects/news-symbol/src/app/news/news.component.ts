import { Component } from '@angular/core';
import { SymbolNewsService } from '../services/symbol-news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  articles: any[] = [];
  searchResults: any[] = [];
  filters: string[] = [];
  showSearchBar: boolean = false;

  constructor(
    private symbolNewsService: SymbolNewsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.symbolNewsService.getArticles().subscribe((data) => {
      this.articles = data;
      this.searchResults = data;
    });
  }

  addSymbol(): void {
    this.showSearchBar = true;
  }

  searchArticles(ticker: string): void {
    const lowerCaseTicker = ticker.toLowerCase();
    if (!this.filters.includes(lowerCaseTicker)) {
      this.filters.push(lowerCaseTicker);
      this.updateSearchResults();
    }
    this.showSearchBar = false;
  }

  removeFilter(ticker: string): void {
    this.filters = this.filters.filter(filter => filter !== ticker.toLowerCase());
    this.updateSearchResults();
  }

  updateSearchResults(): void {
    if (this.filters.length === 0) {
      this.searchResults = this.articles;
    } else {
      this.searchResults = this.articles.filter(article => this.filters.includes(article.ticker.toLowerCase()));
    }
  }

  viewArticle(id: any) {
    this.router.navigate(['/article', id]);
  }
}

