import { Injectable } from '@angular/core';
//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders } from '@angular/common/http';

//2. Import Observable 
import { Observable } from 'rxjs';

//3. Import the Article object
import { Article } from './article';

//3. Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticlesService {
  
  private url:string = 'http://localhost:3000/api/articles';
  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article> {
    return this.http.get<Article>(this.url);
  }

  getArticle(slug: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${slug}`);
  }

  createArticle (articles: Article): Observable<Article> {
    return this.http.post<Article>(this.url, articles, httpOptions);
  }

  editArticle (articles: Article): Observable<Article> {
    return this.http.put<Article>(this.url, articles, httpOptions);
  }

  deleteArticle (id: string): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }

}
