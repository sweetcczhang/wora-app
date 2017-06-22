import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http }     from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {parseString} from "xml2js";
import 'rxjs/add/operator/map';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  film: Observable<any>;
  ids:any;

  public posts: Object[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
  ) {
  }

  ngOnInit() {
    this.ids = this.navParams.get('film');
    console.log('ids:'+this.ids);
    console.log('ffff:'+'https://api.douban.com/v2/movie/subject/'+this.ids.id);
    var url='https://api.douban.com/v2/movie/subject/'+this.ids.id;
    console.dir(url);
    console.log(url);
    this.film=this.http.get(url)
      .map(res =>res.json());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}

/*
* {

 }
*
* */
