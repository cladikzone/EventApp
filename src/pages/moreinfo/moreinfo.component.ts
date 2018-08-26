import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailComposer } from 'ionic-native';

import { Contacts, Contact, ContactField, ContactName, SMS, SocialSharing, Calendar } from 'ionic-native';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html'
})
export class MoreinfoComponent implements OnInit {
  public googleMapdirectionUrl: any;
  public iOSMapdirectionUrl: any;
  public notification: any;

  constructor(private sanitizer:DomSanitizer, 
  public actionSheetCtrl: ActionSheetController, 
  public modalCtrl: ModalController,
  public alertCtrl: AlertController) { }

  ngOnInit() {
      this.googleMapdirectionUrl = this.sanitizer.bypassSecurityTrustUrl('comgooglemaps://?q=6.936346,79.976533');
      this.iOSMapdirectionUrl = this.sanitizer.bypassSecurityTrustUrl('maps://?q=6.936346,79.976533');
  }

  item = {
    title: 'විශේෂ වැඩසටහන් නිවේදන',
    description: 'මෙම මස 19 වන දින පින්වත් ලොකු ස්වාමීන් වහන්සේ විසින් පවත්වනු ලබන විශේෂ යොවුන් සදහම් වැඩ සටහනට පින්වත් ඔබත් සැදැහැ සිතින් පැමිනෙන්න'
  };

  presentActionSheet(item) {
    var options = {
      message: item.description, // not supported on some apps (Facebook, Instagram)
      subject: item.title, // fi. for email
      // files: ['', ''], // an array of filenames either locally or remotely
      // url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
    };

    var _options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    var date = new Date();
    //And for our final trick: Thai Buddhist calendar and Thai digits
    // var t = date.toLocaleDateString("buddhist", _options);

    console.log(date.getFullYear() + 543+'/'+date.getMonth()+'/'+date.getDate());

    SocialSharing.shareWithOptions(options);
  }

  addToCalendar(item){
    Calendar.createEvent(item.title, 'මහමෙව්නාව බෝධිඥාන භාවනා අසපුව.', item.description, new Date('02/19/2017'), new Date('02/20/2017')).then((response) => {
      console.log('Event created');
      this.showAlert();
    }, (error) => {
      console.log('Eror : '+error);
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Calendar',
      subTitle: 'Event successfully added to your calendar!',
      buttons: ['OK']
    });
    alert.present();
  }
}