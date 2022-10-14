import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test: any = [
    {
      actionName: "Copy+Paste",
      actionFunction: () => {
        alert("Copy+Paste")
      }
    }
  ]
}
