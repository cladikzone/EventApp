import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html'
})
export class CalenderComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalCalenderContentPage, characterNum);
    modal.present();
  }
}

@Component({
  template: `
      <ion-header>
        <ion-toolbar>
          <ion-title>
            Description
          </ion-title>
          <ion-buttons start>
            <button ion-button (click)="dismiss()">
              <span ion-text color="primary" showWhen="ios">Cancel</span>
              <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
            </button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content padding>
        <ul>
          <li>උරුවේල ජනපදයේදී උරුවේල කස්සප, නදී කස්සප, ගයා කස්සප තුන්බෑ ජටිලයන් ප්‍රධාන දහසක් දෙනා දමනය කොට ඒහි භික්ඛු භාවයෙන් ගෞතම සසුනෙහි පැවිදි බව ලැබීම සිදුවූයේ දුරුතු පුන් පොහෝ දිනකය.</li>
          <li>ගෞතම බුදුරජුන්ගේ ප්‍රථම ලංකාගමනය සිදුවූයේ ශ්‍රී සම්බුද්ධත්වයෙන් මාස අටක් ගතවූ තැන එළැඹි දුරුතු පුන්පොහෝ දින ය.</li>
          <li>සුමන සමන් දෙව් රජුන්ගේ ඉල්ලීමකට අනුව බුදුරජාණන් වහන්සේ විසින් ලබාදුන් කේශ ධාතු තැන්පත් කරවමින් මහියංගණ චෛත්‍ය රාජයාණන් වහන්සේ ඉදිකරණු ලැබුවේ ද එම දුරුතු පුන් පොහෝ දා ය. මහියංගණ චෛත්‍ය රාජයාණන් වහන්සේ තුළ පසු කලෙක සර්වඥ ග්‍රීවා ධාතූන් වහන්සේ ද තැන්පත් කරනු ලැබීය.</li>
        </ul>
      </ion-content>`
})
export class ModalCalenderContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = [this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}