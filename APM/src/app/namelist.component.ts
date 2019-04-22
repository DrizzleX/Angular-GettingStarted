import { Component } from '@angular/core';

@Component({
    selector: 'name-list',
    template: `
      <p>Name: {{name}}</p>
      <p>Email: {{email}}</p>
    `
  })
export class NameListComponent {
  name: string = 'Theo';
  email: string = 'theosi@outlook.com';
}
  