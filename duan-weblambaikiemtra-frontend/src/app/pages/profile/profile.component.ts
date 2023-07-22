import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoginService } from 'src/app/services/login.service';
import {finalize} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    id: '',
    email : '',
    firstname: '',
    lastname: '',
    username: '',
    avatar :'',
    password: '',
    phone: '',
    roles : []
  }
  avatarFile:any;
  userDetail:any;


  constructor(
    private loginService: LoginService,
    private storage:AngularFireStorage,
    private userService: UserService,
    private router:Router)
  { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    console.log(this.user);
    this.loginService.getCurrentUser().subscribe((data)=>{

    },
    (error)=>{
      Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
      this.loginService.logout();
    }
    )
  }
  setAvatar(event:any){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
       reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) =>  this.user.avatar = e.target.result;
      this.avatarFile = event.target.files[0];
    } else {
      // @ts-ignore
      this.user.avatar = null;
    }
  }
  updateAvatar(){

  }
  updateUser(){
    let user={
      id: "",
      lastname:"",
      firstname:"",
      email: "",
      password: "",
      username: "",
      avatar: "",
      roles: []
    };
    user.id = this.user.id;
    user.lastname = this.user.lastname;
    user.username = this.user.username;
    user.firstname =this.user.firstname;
    user.password = this.user.password;
    user.email = this.user.email;
    user.roles = this.user.roles;
    // user.avatar = this.user.avatar;
    if (this.user.avatar != null) {
      const filePath = `${this.avatarFile.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.avatarFile).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            user.avatar = url;
            this.userService.updateUser(user).subscribe((data) => {

              Swal.fire('susscess!!', 'update user thành công', 'success').then((result)=>{
                this.router.navigate(['/user-dashboard/profile']);
                this.loginService.setUser(data);
                this.loginService.loginStatusSubject.next(true);
                window.location.reload();
              });
            })
          });
        })).subscribe();
    }

  }
  updateToDataBase(){
    let user={
      id:"",
      avatar:""
    };
    user.id = this.user.id;
    user.avatar =this.user.avatar;

    this.userService.updateUser(user).subscribe((user)=>{
      Swal.fire('Thành công', 'Update thành công!', 'success');
      this.loginService.setUser(user);
      this.loginService.loginStatusSubject.next(true);
    },(error)=>{

    });
  }


}
