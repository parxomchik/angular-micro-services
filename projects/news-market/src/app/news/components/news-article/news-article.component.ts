import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketNewsService } from '../../../services/market-news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private marketNewsService: MarketNewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.marketNewsService.getArticleById(articleId).subscribe(article => {
        this.article = article;
      });
    });
  }
}
