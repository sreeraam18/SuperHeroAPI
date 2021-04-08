import { Component, OnInit } from '@angular/core';
import { LoadingController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

//import { TabsPage } from './tabs-page';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.page.html',
  styleUrls: ['./detailed-view.page.scss'],
  providers: [NavParams]
})
export class DetailedViewPage implements OnInit {
  tabsViews:'0'|'1'|'2'|'3'|'4'|'5'='0'
  data=[];
  id=null;
  newData=[]
  constructor(public api: ApiService,private navparams:NavParams, public loadingController: LoadingController) { 
    
  }
  
  
  ngOnInit() {
    //this.searchItem();
  }
  ionViewDidEnter() {
    this.searchItem();
  }
  async searchItem(){
    // if(this.searchName!=null){
      console.log('function chk')
      let endPoint=this.id;
      console.log(this.id)
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 100000
      });
      await loading.present();
      
      this.api.postWtkn(endPoint).subscribe((data: any) => {
        console.log(data);
        if (data.status) {
           this.newData=data
        }
        
      })
      await loading.dismiss();
    // }, 10000);
  }
}
