import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from '../video.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {


  videodata: any;
  subscription: Subscription;

  constructor(private videoService: VideoService) {
    
   }

  
  category: any = "Angular";
  temp: any;

  ngOnInit() {
    this.videodata = this.fetchVideoData();
  }

  fetchVideoData(): any {
    this.subscription = this.videoService.fetchVideos().subscribe(data => {
      this.videodata = data;
    })
  }

  onVideoSelect( vid: any ): any {
    this.videoService.sendClickCall(vid);
  }

  onChange(category: any) {
    console.log(category);
    // this.videoService.fetchVideos().subscribe(data => {
    //   for(var i = 0; i < data.length; i++) {
    //     if(data.category === category) {
    //       this.videodata[i] = data[i];
    //     }
    //   } 
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
