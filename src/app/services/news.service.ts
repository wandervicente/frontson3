import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog_post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'http://localhost:3000/news';

  constructor(private http: HttpClient) { }

  getNews(publishDate: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.url}?publish_date=${publishDate}`)
  }
}
