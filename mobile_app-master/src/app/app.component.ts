import { Component,Input,OnInit } from '@angular/core';
import { AlertController,ToastController,} from '@ionic/angular';
import { Platform} from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
declare var FirebasePlugin: any;

// import { NgZone } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  [x: string]: any;

  @Input() title = '';
  @Input() content = '';
  @Input() isAccordion = false;
  isContentVisible: { [key: string]: boolean } = {
    engineering: false,
  };

  statusbar: any;
  splshscreen: any;
coursename: any;
menu: any;
menuArry: any[];
menud: any=[];
  listid: any;
  courseId: any;
  coursesArray: any=[];
  courseCatId: any;
  loginuserId: any;
  username: any;
  email: any;
  phone: any;
  token: any;
Usertype:boolean= false;
  userType: any;
  notificationType: any;
  shortlistedColleges: number[] = []; 
  constructor(
  private device: Device,
  public alertController: AlertController,
  private platform: Platform,
  public service: ServiceService,
  public activatedRoute: ActivatedRoute,
  public router: Router,
  private menuController: MenuController,
  public toastController: ToastController
) {

  this.platform.ready().then(() => {

    if (this.platform.is('cordova') && typeof FirebasePlugin !== 'undefined') {

      FirebasePlugin.hasPermission((hasPermission) => {

        if (!hasPermission) {

          FirebasePlugin.grantPermission(() => {
            this.initFCM();
          });

        } else {
          this.initFCM();
        }

      });

    }

  }).catch(e => console.log('ErrorInitFCM', e));

}


initFCM() {

  FirebasePlugin.getToken((token) => {
    console.log("FCM Token:", token);
    localStorage.setItem("device_token", token);
  }, (error) => {
    console.error("Token error:", error);
  });

  FirebasePlugin.onTokenRefresh((token) => {
    console.log("Token refreshed:", token);
    localStorage.setItem("device_token", token);
  });

  FirebasePlugin.onMessageReceived((message) => {

    console.log("Notification received:", message);

    this.router.navigate(['/notification']);

  }, (error) => {
    console.error("Notification error:", error);
  });

}
    

ngOnInit(): void {

  this.getUserData();
  // ✅ Get Courses safely
  const coursedata = localStorage.getItem('courses');

  if (coursedata) {
    try {
      this.coursesArray = JSON.parse(coursedata);

      if (Array.isArray(this.coursesArray) && this.coursesArray.length > 0) {
        this.courseId = this.coursesArray[0].id;
      }

    } catch (error) {
      console.error('Invalid courses JSON', error);
      this.coursesArray = [];
    }
  }

  // ✅ Get Category safely
  const catData = localStorage.getItem('catID');

  if (catData) {
    try {
      this.courseCatId = JSON.parse(catData);
    } catch (error) {
      console.error('Invalid catID JSON', error);
    }
  }

  console.log('Course Category:', this.courseCatId);

  // ✅ Clean condition
  if (this.courseCatId) {
    this.getmenudata();
  }

}
   

getUserData() {

  const userData = localStorage.getItem('user');
  const hasSkipped = localStorage.getItem('hasSkipped');

  let user = null;

  if (userData) {
    try {
      user = JSON.parse(userData);
    } catch (error) {
      console.error('Invalid user JSON', error);
    }
  }

  if (user) {
    this.loginuserId = user.id;
    this.username = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.token = user.token;

    this.Usertype = true;
    this.router.navigateByUrl('/tabs/tabs/tab1');

  } else if (hasSkipped) {

    console.log('User skipped login.');

  } else {

    this.Usertype = false;
    this.router.navigateByUrl('/welcomepage');

  }

}

userlogin() {
  if(this.loginuserId){
    this.router.navigateByUrl('/tabs/tabs/tab1');
}
}
skipLogin() {
 
  localStorage.setItem('hasSkipped', 'true');


}
userlogindata()
{
  if(  this.Usertype==false)
  {
    this.router.navigateByUrl('/welcomepage');
  }
  else
  {
    this.router.navigateByUrl('/tabs/tabs/tab1');
  }

}

  toggleVisibility(itemKey) {
    console.log(itemKey);
    if (this.isAccordion) {
      this.isContentVisible[itemKey] = !this.isContentVisible[itemKey];
    } else {
      this.isContentVisible[itemKey] = true;
    }
  }


showNotification(title: string,msg: string)
{
    this.alert.create({
      header:title,
      message:msg,
      buttons:[{
        text:'OK'
      }]

    }).then((ele)=>{
      ele.present();
    });
}


closeMenu() {
  this.menuController.close();
}

getmenudata() {

  console.log("Category ID:", this.courseCatId);
  console.log("Course ID:", this.courseId);

  this.service.getmenults(this.courseCatId, this.courseId).subscribe(
    (res) => {
      console.log("Full Menu Response:", JSON.stringify(res));
      this.menu = res;
    },
    (error) => {
      console.error('Menu API error', error);
    }
  );
}
}

