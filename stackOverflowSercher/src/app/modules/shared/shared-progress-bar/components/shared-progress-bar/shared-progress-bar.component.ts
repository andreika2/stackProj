import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-progress-bar',
  templateUrl: './shared-progress-bar.component.html',
  styleUrls: ['./shared-progress-bar.component.scss']
})
export class SharedProgressBarComponent {

  @Input() public loaderText = "Loading..."

}
