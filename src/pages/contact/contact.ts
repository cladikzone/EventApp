import { Component } from '@angular/core';
import { CalenderComponent } from '../calender/calender.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  }

  items = [{
    title : 'දුරුතු පොහොය'
  },
  {
    title : 'නවම් පොහොය'
  },{
    title : 'මැදින් පොහොය'
  },{
    title : 'බක් පොහොය'
  },{
    title : 'වෙසක් පොහොය'
  },{
    title : 'පොසොන් පොහොය'
  },{
    title : 'ඇසළ පොහොය'
  },{
    title : 'නිකිණි පොහොය'
  },{
    title : 'බිනර පොහොය'
  },{
    title : 'වප් පොහොය'
  },{
    title : 'ඉල් පොහොය'
  },{
    title : 'උඳුවප් පොහොය'
  }];

  openCalender(item){
     this.navCtrl.push(CalenderComponent);
  }

}
