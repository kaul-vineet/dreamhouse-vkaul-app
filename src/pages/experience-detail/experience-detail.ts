import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"


@Component({
    selector: 'page-experience-detail',
    templateUrl: 'experience-detail.html'
})

export class ExperienceDetailPage implements OnInit {
  vidUrl:SafeResourceUrl;
  constructor(private domSatizer: DomSanitizer) {

  }
	
  ngOnInit() {
  this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl("https://vrar-millenial-falcon.herokuapp.com/");
  }

}
