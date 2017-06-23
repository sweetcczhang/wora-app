import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http }     from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


   films:Observable<any>;
  public posts: Object[] = [];

  constructor(
    public navCtrl: NavController,
    public http: Http,
  ) {

  }

  ngOnInit() {
    // this.initBuptBbsRss()

    this.films = this.http.get('https://api.douban.com/v2/movie/coming_soon')
      .map(res => res.json());
    // this.fft=this.http.get('https://api.douban.com/v2/movie/subject/1292052').subscribe(res=>res.json());

    // console.log("hahhh:"+JSON.stringify(this.fft))
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }

}
