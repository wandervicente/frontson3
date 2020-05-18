import { Component, OnInit } from '@angular/core';
import { Blog, BlogPost } from '../models/blog_post.model';
import { Ibov, IbovItem } from '../models/ibov.model';
import { IbovService } from '../services/ibov.service';
import { NewsService } from '../services/news.service';
import Misc from '../models/misc';
import { DatePipe } from '@angular/common';


// ***********************************
// Coloquei a mais para tentar filtrar as datas

// export const sortDate = (direction: any, a: string, b: string): number => {
//   let first = Number(new DatePipe('en-US').transform(a, 'ddMMyyyy'));
//   let second = Number(new DatePipe('en-US').transform(b, 'ddMMyyyy'));

//   if (first < second) {
//       return -1 * direction;
//   }
//   if (first > second) {
//       return direction;
//   }
//   return 0;
// }


// ****************************************



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {
  ibovs: IbovItem[];
  posts: BlogPost[];

  constructor(private ibovService: IbovService, private newsService: NewsService) { }

  ngOnInit() {
    this.getIbovs();
  }

  getIbovs() {
    this.ibovService.getIbovs().subscribe((ibov: Ibov) => {
      this.ibovs = ibov.itens.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }, error => {
      console.log(error)
    })
  }

  onIbovRowSelect(event): void {
    this.getNews(event.data.date)
  }

  getNews(publishDate: string) {
    this.newsService.getNews(publishDate).subscribe((blog: Blog) => {
      this.posts = blog.itens.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    }, error => {
      console.log(error)
    })
  }

  settingsIbov = {
    columns: {
      ibov: {
        title: 'Ibov',
        filter: true,
      },
      date: {
        title: 'Data',
        filter: true,
        valuePrepareFunction: (cell, row) => {
          return Misc.ptbrDate(cell)
        }
      },
    }
  }

  settingsNews = {
    columns: {
      title: {
        title: 'Título'
      },
      authors: {
        title: 'Autores'
      },

      publishDate: {
        title: 'Data de publicação',
        valuePrepareFunction: (cell, row) => {
          return Misc.ptbrDate(cell)}
        },

      url:{
        title: 'Url'
      },

      concepts:{
        title:'Conceitos'
      },
      sentiment:{
        title:'Sentimentos'
      },

    }

  }
}
