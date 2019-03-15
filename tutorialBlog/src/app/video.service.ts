import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  data: any = {
    "id": 1,
    "title": "SoftwareDevelopmentLifeCycle",
    "category": "Newbee",
    "url": "https://www.youtube.com/embed/i-QyW8D3ei0"
  };

  private subject = new BehaviorSubject(this.data); 

  constructor(private httpClient: HttpClient) {}

  fetchVideos(): any {
    return this.httpClient.get('../assets/video.json');
  }

  sendClickCall(message: string) {
    this.subject.next(message);
 }


 getClickCall(): Observable<any> {
    return this.subject.asObservable();
 }
  
}
