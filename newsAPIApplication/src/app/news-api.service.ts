import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsAPIService {

  constructor(private httpClient: HttpClient) { }

  fetchNews(): any {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb8bb69bc3194cb4b1d013dcec2f8613');
  }
}
