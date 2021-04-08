import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { BehaviorSubject,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum ConnectionStatusEnum{
  Online,
  Offline
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authToken='';
  public loginUser:any;
  public isOnline:boolean=true;
  private previousStatus;
  tokenStatus= new BehaviorSubject(false);
  connectionStatus= new BehaviorSubject(false);
  constructor(public http: HttpClient) {
    // this.platform.ready().then(() => {
    //   this.previousStatus=ConnectionStatusEnum.Online;
    //   this.storage.get('token').then(data=>{
    //     this.authToken=data;
    //     this.tokenStatus.next(true);
    //   });
    //   this.storage.get('loginDetails').then(data=>{
    //     this.loginUser=data;
    //   });
    // });
   }
  //  httpOptions:any = {
  //   headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   })
  // };

  // tokenStatusCheck(){
  //   return this.tokenStatus.asObservable();
  // }
  // post(endpoint:string,body:any={}){
  //   return this.http.post(environment.endPoint+endpoint,JSON.parse(body),this.httpOptions);
  // }
  postWtkn(endpoint:string){
    //console.log(endpoint,body, this.authToken)
      let options={
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Token':this.authToken
        })
      };
      return this.http.get(environment.endPoint+endpoint);
  }
  // setToken(token:string=null){
  //   this.storage.set('token',token)
  //   .catch(e=>console.log(e))
  //   .then(s=>{
  //     this.authToken=token;
  //     this.tokenStatus.next(true);
  //   });
  // }
}
