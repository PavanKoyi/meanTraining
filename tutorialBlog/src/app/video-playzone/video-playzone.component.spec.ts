import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayzoneComponent } from './video-playzone.component';

describe('VideoPlayzoneComponent', () => {
  let component: VideoPlayzoneComponent;
  let fixture: ComponentFixture<VideoPlayzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
