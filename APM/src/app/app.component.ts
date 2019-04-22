import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>
  //   hello
  // </h1>
  // <p>
  //   This is your new homepage
  // </p>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}
