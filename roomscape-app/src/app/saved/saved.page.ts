import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilterService } from '../services/filter.service';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  DoneRooms=[];
  SaveRooms=[];
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
    this.DoneRooms =  this.filterService. getDoneRooms();
    this.SaveRooms =  this.filterService. getSaveRooms();
  }
  goToRoomscape(roomscape){ 
    this.filterService.setRoomscape(roomscape);
    console.log("Carga los datos");
    this.router.navigate(["/details"]);
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
