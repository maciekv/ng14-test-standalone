import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true,
})
export class FooDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.innerHTML =
      '<span style="color:red">appFoo directive standalone works</span> ';
  }
}
