import { Component, OnInit } from '@angular/core';
import { NewsAPIService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newsAPIApplication';

  constructor(private newsAPIService: NewsAPIService ) { }

  newsItems: any;

  ngOnInit() {
    this.fetchNews(); 
  }

  fetchNews(): any {
    this.newsAPIService.fetchNews().subscribe(data => {
      this.newsItems = data.articles;
    });
  }

  onNewsItemSelected(newsItem) {
    window.open(newsItem.url, "_blank" );
  }

}
