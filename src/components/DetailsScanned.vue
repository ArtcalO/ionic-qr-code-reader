<template>
  <ion-header class="non-printable" >
    <ion-toolbar lines="none" color="light">
      <ion-buttons slot="start">
        <ion-button @click="closeModal">
          <ion-icon class="close" :icon="close" size="md"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
   <ion-card>
      <ion-card-header>
        <ion-card-title>details</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-label>Tranche 1  : {{insription.tranches.tranche1?'Payé':'Non Payé'}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Tranche 2  : {{insription.tranches.tranche2?'Payé':'Non Payé'}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Tranche 3  : {{insription.tranches.tranche3?'Payé':'Non Payé'}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Tranche 4  : {{insription.tranches.tranche4?'Payé':'Non Payé'}}</ion-label>
          </ion-item>
        </ion-list>        
      </ion-card-content>
    </ion-card>
 
  </ion-content>
</template>

<script>
  import {
    IonContent,IonButton,IonButtons, IonHeader,IonToolbar,modalController,IonIcon,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonList,IonItem,IonLabel
  } from '@ionic/vue';

  import { defineComponent } from 'vue';

  import {close,} from "ionicons/icons"

  export default defineComponent({
    data(){
      return {
        close,sharingProof:false,
      }
    },
    props:["insription",],
    components: {
      IonContent, IonHeader,  IonToolbar,IonButton,IonButtons,IonIcon,
      IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonList,IonItem,IonLabel
    },
    watch: {
      'sharingProof'(val){
        if(val)
          this.sharingProof=val
      },
    },
    methods:{
      closeModal(){
        modalController.dismiss({dismiss:true})
      },
    }
  });
</script>
<style lang="css" scoped>

.close{
  font-size:34px;
  margin-left:5px;
  margin-top:7px;
}
.header-md::after{
  width:0;
  height:0;
}

.share{
  --background:var(--color-3)
}


</style>