import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HTTP) {
  this.loadData();
  }

items:any;
loadData(){

  let headers = {"Content-Type": "application/x-www-form-urlencoded"};
   this.http.get('https://jsonplaceholder.typicode.com/posts',{},headers).then(result =>{
  console.log('RESULT',result);
   this.items= JSON.parse(result['data']);
 }).catch(err=>{
   console.log('ERROR',err);
 })
}
itemClick(itembody:string){
  alert(itembody);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }L

}
