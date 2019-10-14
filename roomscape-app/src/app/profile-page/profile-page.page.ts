import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { FilterService } from '../services/filter.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  DoneRooms=[];
  SaveRooms=[];

  constructor(
  /*   private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder, */
    public router: Router,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private storage: Storage,
    public filterService : FilterService

    /*  private webview: WebView */
  ) { }

  username: string;

  ngOnInit() {
    this.DoneRooms =  this.filterService. getDoneRooms();
    this.SaveRooms =  this.filterService. getSaveRooms();
  }

  ionViewWillEnter(){
    this.storage.get('name').then((val) => {
      this.username = val;
    });
  }
  

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.storage.clear();
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }

}

