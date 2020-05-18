import { Component, OnInit } from '@angular/core';
import { IbovService } from './services/ibov.service';
import { NewsService } from './services/news.service';
import { Ibov, IbovItem } from './models/ibov.model';
import { Blog, BlogPost } from './models/blog_post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
