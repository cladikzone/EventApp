import { Component, OnInit } from '@angular/core';
import { MoreinfoComponent } from '../moreinfo/moreinfo.component';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    
  }

  moreInfo(item){
    this.navCtrl.push(MoreinfoComponent);
  }

}