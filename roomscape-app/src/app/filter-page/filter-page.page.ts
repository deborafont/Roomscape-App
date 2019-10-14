
// Mapa, antes de nada instalar paquete leaflet: npm install leaflet --save

// Mapa- se añade ViewChild y ElementRef . 
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ROOMSCAPES } from '../db1';
import { FilterService } from '../services/filter.service'

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.page.html',
  styleUrls: ['./filter-page.page.scss'],
})
export class FilterPagePage implements OnInit {
  
  roomscapes = ROOMSCAPES;
  searchTerm: string = "";
  filteredRooms = [];
  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView,
    public filterService : FilterService
  ) { }

  ngOnInit() {
    console.log("Roomscapes en filter-page.page!!: ", this.roomscapes);
  }

  setFilterItems(){
    console.log("Searching term: ", this.searchTerm);
    this.filteredRooms = this.filteredItems(this.searchTerm);
    console.log("Roomscapes filtrados!!: ", this.filteredRooms);
  }
  
  filteredItems(searchTerm){
    return this.roomscapes.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  } 

  goToRoomscape(roomscape){ 
    this.filterService.setRoomscape(roomscape);
    console.log("Carga los datos");
    this.router.navigate(["/details"]);
  }
}
