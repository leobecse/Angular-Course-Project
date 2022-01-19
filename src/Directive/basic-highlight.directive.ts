import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private rendrer: Renderer2) { }

  ngOnInit(): void {
    this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
