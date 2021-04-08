import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { DetailedViewPage } from '../detailed-view/detailed-view.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchName=null;
  allType=[]
  selectData=[]
  constructor(public api: ApiService,public loadingController: LoadingController, public modalController: ModalController) {
    
  }
  ionViewDidEnter() {
    this.loadpeople();
  }
  async loadpeople(){
    console.log('hi')
    var i=0
    const loading = await this.loadingController.create({
      //cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
     for(i=1;i<=731;i++){
      this.api.postWtkn(String(i)).subscribe((data: any) => {
        //console.log(data);
        this.allType.push(data);
      })
     }
      // setTimeout(() => {
      //   console.log(this.allType)
      // }, 10000); 
     await loading.dismiss();
  }
  async valueFetch(id){
    //console.log('hi')
    //var i=0
    const loading = await this.loadingController.create({
      //cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
     //for(i=1;i<=731;i++){
      this.api.postWtkn(id).subscribe((data: any) => {
        //console.log(data);
        this.selectData.push(data);
      })
     //}
      // setTimeout(() => {
      //   console.log(this.allType)
      // }, 10000); 
     await loading.dismiss();
  }
  async presentModal(id) {
    const modal = await this.modalController.create({
      component: DetailedViewPage,
      //cssClass: 'my-custom-class',
      componentProps: {
        'id': id,
        'data':this.selectData
      }
    });
    return await modal.present();
  }
  searchItem(value){
    // if(this.searchName!=null){
      let endPoint=value;
      this.api.postWtkn('search/'+endPoint).subscribe((data: any) => {
        console.log(data);
        // if (data.status) {
        //   this.modalCtrl.dismiss({ reload: true });
        // }
      })
    // }
  }

}
