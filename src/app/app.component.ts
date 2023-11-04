import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-project';
  hide = true;
  onClick(e: boolean) {
    if (e == true) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }
}
