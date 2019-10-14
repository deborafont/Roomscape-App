import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ROOMSCAPES } from '../db1';
import { FilterService } from '../services/filter.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  roomscapes = ROOMSCAPES;
  roomscape:any;
  validations_form: FormGroup;
  image: any;
  item: any;
  load: boolean = false;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    public filterService : FilterService
  ) { }

  ngOnInit() {
    this.roomscape =  this.filterService.getRoomscape();
  }
  toggleDoneRoom(room) {
    if(room.done && room.done == true) {
      this.filterService.removeDone(room);
    }
    else{
      this.filterService.addDoneRoom(room);
    }
  }

  toggleSaveRoom(room) {
    if(room.save && room.save == true) {
      this.filterService.removeSave(room);
    }
    else{
      this.filterService.addSaveRoom(room);
    }
  }
}
