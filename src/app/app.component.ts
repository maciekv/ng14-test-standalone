import { CommonModule } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooComponent } from './foo.component';
import { FooDirective } from './foo.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FooDirective, CommonModule, RouterModule, FooComponent],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
