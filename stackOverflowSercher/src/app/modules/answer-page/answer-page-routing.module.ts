import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerPageComponent } from './components/answer-page/answer-page.component';

const routes: Routes = [{ path: '', component: AnswerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerPageRoutingModule { }
