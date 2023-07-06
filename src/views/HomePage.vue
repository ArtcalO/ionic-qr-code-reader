<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      
    </ion-content>
  </ion-page>
</template>

<script  >
import axios from "axios"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, modalController } from '@ionic/vue';
import DetailsScanned from "../components/DetailsScanned";
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

export default {
  mounted(){
    this.startScan()
  },
  components:{
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar
  },
  methods:{
    async showDetails(insription){
      const modal = await modalController.create({
        component:DetailsScanned,
        componentProps:{insription:insription}
      })
      modal.present()

      const {data, role} = await modal.onWillDismiss()
      console.log(data)
      console.log(role)
    },
    async startScan() {
      document.querySelector('body').classList.add('scanner-active');
      await BarcodeScanner.checkPermission({ force: true });

      // make background of WebView transparent
      // note: if you are using ionic this might not be enough, check below
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

      // if the result has content
      if (result.hasContent) {
        axios.get(result.content)
        .then((res)=>{
          console.log(res)
          this.showDetails(res.data)
        }).catch((err)=>{console.log(err)})
      }
      document.querySelector('body').classList.remove('scanner-active');
    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
