import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, Slides, NavController } from 'ionic-angular';
// import { BranchesComponent } from '../pages/branches/branches.component';
import { TabsPage } from '../tabs/tabs';
import { WelcomeService } from './welcome.service';

import { RegisterModel } from '../../models/register';
import { Branch } from '../../models/branch';
import { User } from '../../models/user';
import * as _ from 'underscore';
import { CookieService } from 'angular2-cookie/core';
import { CN, API } from '../../app/constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  @ViewChild(Slides) _slides: Slides;

  public regModel: RegisterModel;
  public nearBranches: Array<Branch> = [];
  public user: User = new User();
  
  constructor(public modalCtrl: ModalController, 
  public navCtrl: NavController, 
  private welcomeService: WelcomeService,
  private cookieService: CookieService) { }

  public items:Array<Object> = [];

  slides = [
    {
      title: "නමෝ බුද්ධාය !!!",
      description: 'දසබලයන් වහන්සේ නමැති ශෛලමය පර්වතයෙන් පැන නැගී, අමා මහ නිවන නම් වූ මහා සාගරය අවසන් කොට ඇති,<b> ආර්ය අෂ්ඨාංගික මාර්ගය </b> නම් වූ සිහිල් දිය දහරින් හෙබි, උතුම් ශ්‍රී මුඛ බුද්ධවචන ගංඟාව (ලෝ සතුන්ගේ සසර දුක නිවාලමින්) බොහෝ කල් ගලා බස්නා සේක්වා! <br><br> (සළායතන සංයුත්තය - උද්දාන ගාථා)',
      image: "assets/images/mahamevnawa-logo.png",
    }
  ];

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  goToSlide(index) {
    this.welcomeService.addUserInfo(this.user);
    console.log(this.welcomeService.getRegisterObj());
    this._slides.slideTo(index, 500);
  }

  ngOnInit() {
    this.welcomeService.getNearestBranches('/branches?type=near').subscribe((response) => {
      console.log('BRANCHES == ', response);
      this.nearBranches = response;
    }, (error) => {

    }, () => {

    });
    // this.items.push({
    //   name : 'කඩුවෙල අසපුව',
    //   image : '',
    //   isSelected: true
    // },
    // {
    //   name : 'බෝධිඥාණ අසපුව',
    //   image : '',
    //   isSelected: true
    // });
  }

  goToHome(){
    this.welcomeService.registerUser('/users', this.welcomeService.getRegisterObj()).subscribe((response) => {
      console.log(response);
      this.cookieService.put(CN.TOKEN, response.token);
    }, (error) => {

    }, () => {

    });
    this.navCtrl.setRoot(TabsPage);
  }

}


@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-searchbar (input)="getItems($event)"></ion-searchbar>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
    <ion-buttons end>
      <button ion-button icon-only color="royal" (click)="addBranches()">
        Done
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
    <ion-list>
      <ion-item *ngFor="let item of branches">
        <ion-label>{{ item.name }}</ion-label>
        <ion-label class="distance" style="text-align: right !important;">120.2Km</ion-label>
        <ion-toggle checked="false" [(ngModel)]="item.isSelected"></ion-toggle>
      </ion-item>
    </ion-list>
    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">
      <ion-infinite-scroll-content></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;
  public branches: Array<Branch> = [];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private welcomeService: WelcomeService
  ) {
    this.welcomeService.getBranches('/branches').subscribe((response) => {
        this.branches = response.map((branch) => {
          branch.isSelected = false;
          return branch;
        });
      },(error) => {
        console.log(error);
      }, () => {
        console.log('Request completed');
    });
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      // for (let i = 0; i < 30; i++) {
      //   this.character.push({
      //     name : 'Gollum',
      //     image: 'assets/img/avatar-samwise.jpg'
      //   });
      // }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  addBranches(){
    let branches = _.filter(this.branches, (branch) => {
      return branch.isSelected;
    });
    this.welcomeService.addBranches(branches);
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}