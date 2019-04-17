import { Component } from '@angular/core';

@Component({
    selector: 'name-list',
    template: '<p>Name: {{name}}</p>'
  })
export class NameListComponent {
  name = 'Theo';
}
  