import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/answer-list/answer-list.module').then(m => m.AnswerListModule)
  },
  {
    path: 'answer-page/:questionId',
    loadChildren: () => import('./modules/answer-page/answer-page.module').then(m => m.AnswerPageModule)
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
