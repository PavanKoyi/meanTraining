import { Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../video.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-playzone',
  templateUrl: './video-playzone.component.html',
  styleUrls: ['./video-playzone.component.css']
})
export class VideoPlayzoneComponent implements OnInit, OnDestroy {

  san: any;
  DomSanitizer: any;
  subscription: Subscription;


  constructor(san: DomSanitizer,
    private videoService: VideoService) {
    this.san = san;
   }

  videoUrl: any;

  public vid ;

  ngOnInit() {
    this.subscription = this.videoService.getClickCall().subscribe(data => {
      this.vid = data;
      this.videoUrl = this.san.bypassSecurityTrustResourceUrl(this.vid.url);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onAddFavourite() {
    console.log("video_id : " + this.vid.id);
  }

}
