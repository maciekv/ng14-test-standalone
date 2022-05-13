import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule],
  template: `<p>app-foo component standalone works</p>`,
})
export class FooComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
