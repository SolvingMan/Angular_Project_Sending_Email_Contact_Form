import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaReplayService } from './utils/media-replay.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    MediaReplayService
  ]
})
export class CoreModule { }
