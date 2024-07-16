import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SymbolNewsService } from '../../../services/symbol-news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private symbolNewsService: SymbolNewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.symbolNewsService.getArticleById(articleId).subscribe(article => {
        this.article = article;
      });
    });
  }
}
