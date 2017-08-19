import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive( {
  selector: '[appFor][appForOf]'
} )
export class AppForDirective {

  @Input()
  set appForOf( array: Array<any>) {
    array.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }

  constructor( private view: ViewContainerRef,
               private template: TemplateRef<any> ) {

  }

}
