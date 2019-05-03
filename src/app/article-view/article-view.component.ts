import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getArticle(slug);
  }

  getArticle(slug:string): void {
    this.articlesService.getArticle(slug).subscribe(
      (response:any) => {
        //console.log(response);
        this.article = response.article;
      }
    );
  }

  deleteArticle(slug: string): void {
    if(confirm("Are you sure to delete " + this.article.title)) {
      this.articlesService.deleteArticle(slug).subscribe(
        ()=>{this.router.navigate(['/articles'])}
      );
    }
  }

}
