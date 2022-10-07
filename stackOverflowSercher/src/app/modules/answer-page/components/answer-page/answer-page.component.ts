import { Component, OnInit } from '@angular/core';
import { AnswerPageService } from "./answer-page.service";

@Component({
  selector: 'app-answer-page',
  templateUrl: './answer-page.component.html',
  styleUrls: ['./answer-page.component.scss'],
  providers: [ AnswerPageService ]
})
export class AnswerPageComponent implements OnInit {

  constructor(readonly answerPageService: AnswerPageService) { }

  public ngOnInit(): void {
    this.answerPageService.initAnswerPageData();
  }

}
