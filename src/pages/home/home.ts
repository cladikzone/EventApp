import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      
  }

  posts = [{
    title: 'සැපයට පසුබිම පිනයි…',
    description: 'අද අපි බලාපොරොත්තු වෙනවා බුදුරජාණන් වහන්සේගේ දේශනා ඇසුරෙන් කරුණු කීපයක් කියලා දෙන්න.',
    url: 'http://mahamevnawa.lk/pina_awabodhaya_01',
    image: 'assets/images/PA01_Blog.jpg'
  },
  {
    title: 'දෙව්ලොව උපන් සුමෝහිත හිමි',
    description: 'ඒක් කාලයක මේ මිනිස් ලොව ලස්සන ම ලස්සන යුගයක් තිබුනා. ඒ කාලෙ හැමෝගෙම පින් මතු වුනා. ඒ අපේ ගෞතම සම්මා සම්බුදු රජුන් වැඩ සිටි යුගය යි. මිනිස් ලොව බැබළී ගිය ඒ ස්වර්ණමය යුගයේ හැම තැනම රහතන් වහන්සේලා. හැම තැනම මාර්ගඵල ලාභීන්.',
    url: 'http://mahamevnawa.lk/sitha_niwana_16',
    image: 'assets/images/123.jpg'
  },
  {
    title: 'සිංහල ජාතියට ලැබෙන දේව රැකවරණයෙන් ඔබත් රැකෙන්න',
    description: 'අසත්පුරුෂයා සහ සත්පුරුෂයා වෙන් කරලා හඳුනාගන්න පුළුවන් සත්පුරුෂයාට විතරයි කියලා බුද්ධ දේශනාවේ සඳහන් වෙනවා. අසත්පුරුෂයාට මේ දෙකම හඳුනාගන්න බැහැනේ…',
    url: 'http://mahamevnawa.lk/divaina-20',
    image: 'assets/images/divaina-20-Blog.jpg'
  }];

  openUrl(url):void{
    let browser = new InAppBrowser(url, '_system');
    browser.show();
  }

}
