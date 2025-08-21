import { Directive, HostListener } from '@angular/core';

@Directive({ 
    selector: '[onlyNumber]', 
    standalone: true, 
})

export class OnlyNumberDirective {
  @HostListener('keypress', ['$event'])
  onKeyPress(e: KeyboardEvent) {
    const allowed = /[0-9\.]/;
    if (!allowed.test(e.key)) { e.preventDefault(); }
  }
}
