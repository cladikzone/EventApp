import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomeComponent, ModalContentPage } from '../pages/welcome/welcome.component';
import { CalenderComponent, ModalCalenderContentPage } from '../pages/calender/calender.component';
import { NotificationComponent } from '../pages/notification/notification.component';
import { MoreinfoComponent } from '../pages/moreinfo/moreinfo.component';

import { WelcomeService } from '../pages/welcome/welcome.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient } from './http.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomeComponent,
    ModalContentPage,
    CalenderComponent,
    NotificationComponent,
    MoreinfoComponent,
    ModalCalenderContentPage
],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomeComponent,
    ModalContentPage,
    CalenderComponent,
    NotificationComponent,
    MoreinfoComponent,
    ModalCalenderContentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WelcomeService, CookieService, HttpClient]
})
export class AppModule {}