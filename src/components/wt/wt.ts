import { Component, Input, Output, EventEmitter, ElementRef, Renderer , ViewChild} from '@angular/core';

/**
 * Generated class for the WtComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wt',
  templateUrl: 'wt.html'
})
export class WtComponent {
  @Input('displayOnOff') displayOnOff;
  @Output() respFromWt = new EventEmitter();
  @ViewChild('helpid') helpHandle: ElementRef;

  text: string;

  constructor(private element: ElementRef, private renderer: Renderer) {
    console.log('Hello WtComponent Component');
    this.text = 'Hello World';
  }
  ngAfterViewInit(){
    console.log(this.element);
    this.text = this.displayOnOff;
  }
  hideGuide(){
    console.log('hideGuide');
    this.respFromWt.emit(true);
  }
  reloadFromMain(offsetTop, above_below){
    console.log('reloadFromMain '+offsetTop);
    this.renderer.setElementStyle(this.helpHandle.nativeElement,'top',offsetTop+'px');
  }
}
