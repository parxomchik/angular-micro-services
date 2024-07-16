import { Component } from '@angular/core';
import { MarketNewsService } from '../services/market-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  articles: any[] = [];

  constructor(
    private marketNewsService: MarketNewsService,
  ) { }

  ngOnInit(): void {
    this.marketNewsService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}

