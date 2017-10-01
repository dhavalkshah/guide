import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('button1') button1: ElementRef;
  @ViewChild('button2') button2;
  @ViewChild('button3') button3;
  @ViewChild('wtid') wtid;
  v_displayOnOff:any = {};
  shouldHide:boolean = true;
  cnt: number = 0;

  constructor(public navCtrl: NavController) {
    this.v_displayOnOff.txt = 'From Home Constructor: '+this.cnt;
    this.cnt++;
  }
  showGuide(){
    this.v_displayOnOff.txt = 'From Home Constructor: '+this.cnt;
    this.shouldHide = !this.shouldHide;
    console.log(this.button1.nativeElement.offsetTop);
    console.log(this.button2.nativeElement.offsetTop);
    console.log(this.button3.nativeElement.offsetTop);
    if(this.cnt == 1){
      console.log('sending button 1');
      this.wtid.reloadFromMain(this.button1.nativeElement.offsetTop, 'above');
    }
    else if(this.cnt == 2){
      console.log('sending button 2');
      this.wtid.reloadFromMain(this.button2.nativeElement.offsetTop,'above');
    }
    else if(this.cnt == 3){
      console.log('sending button 3');
      this.wtid.reloadFromMain(this.button3.nativeElement.offsetTop,'below')
    }
    else
      this.wtid.reloadFromMain(this.shouldHide,'below');
    this.cnt++;
    console.log(this.v_displayOnOff);
  }
  handleWtRes(ev){
    console.log(ev);
    this.shouldHide = ev;
  }

}
