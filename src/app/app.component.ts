import { Component } from '@angular/core';
import { MediaReplayService } from './core/utils/media-replay.service';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'vr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFspl = false;

  constructor(
    mediaReplay: MediaReplayService, // workaround for Flex-Layout to receive the initial value
    commonService: CommonService
  ) {
    commonService.fsplObs$.subscribe(flag => {
      this.showFspl = flag;
    });
  }
}
