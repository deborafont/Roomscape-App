// Mapa, antes de nada instalar paquete leaflet: npm install leaflet --save
 
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// Mapa- Leaflet y conexión con datos de RoomScapes . 
import leaflet from 'leaflet';
import { ROOMSCAPES } from '../db1';
import { FilterService } from '../services/filter.service'

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
})
export class MapPagePage implements OnInit {
  // Mapa- añadimos roomscapes y decorador viewChild . 
  roomscapes = ROOMSCAPES;

  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(
    public filterService : FilterService, 
    public router: Router
    ) 
    { }

  //ESPERAR A SERVICIO
   ngOnInit() {
    /*goToDetail(product){
      this.productsService.setSelectedProduct(product);
      this.router.navigate(["/details"]);
    } */
  ////////////////////////////////////////

  }
  // Mapa- añadimos métodos ionViewDidEnter y loadmap . 
  ionViewDidEnter() {
    this.loadmap();
  }
  
  loadmap() {
    var ny =[41.432053, 2.180550];
    this.map = leaflet.map("map").setView(ny, 14);
    leaflet.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(this.map);

    for (var i in ROOMSCAPES) {
      var latlng = leaflet.latLng({ lat: ROOMSCAPES[i].latitude, lng: ROOMSCAPES[i].longitude });
      
     
      var names='';
      for (var j=0; j < ROOMSCAPES[i].rooms.length; j++){
        var name = ("<ion-item onclick = 'goToRoomscape(ROOMSCAPES[i])' style='font-size:18px; color:#288DB6'><ion-row style='width:98%'><ion-col>" + ROOMSCAPES[i].rooms[j].roomname + "</ion-col><ion-col size='1'><i class='fas fa-lock' *ngIf='ROOMSCAPES[i].rooms[j].done !=true'></i><i class='fas fa-unlock' *ngIf='ROOMSCAPES[i].rooms[j].done ==true' style='display:none'></i></ion-col><ion-col size='1'><i class='far fa-heart' *ngIf='ROOMSCAPES[i].rooms[j].favorite !=true'></i><i class='fas fa-heart' *ngIf='ROOMSCAPES[i].rooms[j].favorite ==true' style='display:none'></i></ion-col></ion-row></ion-item>");
        names+=name;

        leaflet.marker( latlng ).bindPopup( "<h3 style='width:80vw; border-bottom:2px solid #777;  padding-bottom:10px'>" + ROOMSCAPES[i].name + "</h3>" + names ).addTo(this.map);
      }

      
    }
  }

  goToRoomscape(roomscape){ 
    this.filterService.setRoomscape(roomscape);
    console.log("Carga los datos");
    this.router.navigate(["/details"]);
  }
}
