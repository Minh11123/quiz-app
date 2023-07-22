import {Component, Inject, Input, OnInit, Renderer2,ViewEncapsulation} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {DOCUMENT} from "@angular/common";
import Swal from "sweetalert2";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
    // 'navbar.component.css',
    // 'bootstrap.min.css',
    // 'bootstrap-icons.css',
    // 'templatemo-tiya-golf-club.css'
    // './assets/libs/OwlCarousel-2/dist/assets/owl.carousel.min.css',
    // './dist/css/style.css'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {
  showNavbar = true;
  isLoggedIn = false;
  user = {
    username: '',
    password: '',
    email: '',
    firstname:'',
    lastname:''
  };
  hide = true;


  //dùng 2 cách để kiểm tra login logout, 1 là dùng luôn phương thức của loginService bằng các public loginService,
  // cách thứ 2 là tạo 1 biến subject để theo rõi, mỗi khi login hay logout thì biến sẽ thay đổi và mỗi lần biến thay đổi thì kiểm tra lại dữ liệu

  constructor(
    private routerlink: Router,
    private snack: MatSnackBar,
    public loginService: LoginService,
    public router: Router,
    private renderer2: Renderer2,
    private userService: UserService,
    @Inject(DOCUMENT) private document: Document
  ) {
    // const script = this.renderer2.createElement('script');
    // script.type = 'text/javascript';
    // script.setAttribute('src', './js/jquery.min.js');
    // this.renderer2.appendChild(this.document.body, script);
    //
    // const script2 = this.renderer2.createElement('script');
    // script2.type = 'text/javascript';
    // script2.setAttribute('src', './js/bootstrap.bundle.min.js');
    // this.renderer2.appendChild(this.document.body, script2);
    //
    // const script3 = this.renderer2.createElement('script');
    // script3.type = 'text/javascript';
    // script3.setAttribute('src', './js/jquery.sticky.js');
    // this.renderer2.appendChild(this.document.body, script3);
    //
    // const script4 = this.renderer2.createElement('script');
    // script4.type = 'text/javascript';
    // script4.setAttribute('src', './js/custom.js');
    // this.renderer2.appendChild(this.document.body, script4);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    // this.user = this.loginService.getUser();
    if(this.loginService.isLoggedIn()){
      this.router.navigate(["user-dashboard"]);
    }
    // this.loginService.loginStatusSubject.asObservable().subscribe((data: any) => {
    //   this.isLoggedIn = this.loginService.isLoggedIn();
    //   this.user = this.loginService.getUser();
    //
    //   //
    //   //
    // })
  }

  logout() {
    this.loginService.logout();
    this.router.navigate([""]);
    this.loginService.loginStatusSubject.next(false);
    window.location.reload();

  }
  formSubmit() {
    if (this.user.username.trim() == '' || this.user.username == null) {
      this.snack.open('xin lỗi username không được để trống', 'X', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        //custom snackbar thêm class vào để thay đổi màu sắc
        panelClass: ['snackBar-custom'],
      });
      return;
    }
    if (this.user.password.trim() == '' || this.user.password == null) {
      this.snack.open('xin lỗi password không được để trống', 'X', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        //custom snackbar thêm class vào để thay đổi màu sắc
        panelClass: ['snackBar-custom'],
      });
      return;
    }
    this.loginService.generateToken(this.user).subscribe(
      (data: any) => {

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          if (this.loginService.getUserRole() == "ADMIN") {

            this.router.navigate(["/admin"]);
            this.loginService.loginStatusSubject.next(true);
          } else if (this.loginService.getUserRole() == "USER") {
            this.router.navigate(["/user-dashboard"]);
            this.loginService.loginStatusSubject.next(true);
          } else {
            this.loginService.logout();
          }
        });
      },
      (err) => {
        this.snack.open('đăng nhập thất bại tài khoản hoặc mật khẩu không chính xác', 'X', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          //custom snackbar thêm class vào để thay đổi màu sắc
          panelClass: ['snackBar-custom'],
        });
      }
    );
  }
  formSubmit1() {

    if (this.user.username == null || this.user.username == '') {
      this.snack.open("xin lỗi username không được để trống","X",{
        duration: 2000,
        verticalPosition:'top',
        horizontalPosition:"right",
        //custom snackbar thêm class vào để thay đổi màu sắc
        panelClass:['snackBar-custom']
      });
      return;
    }
    if (this.user.firstname == null || this.user.firstname == '') {
      this.snack.open("xin lỗi username không được để trống","X",{
        duration: 2000,
        verticalPosition:'top',
        horizontalPosition:"right",
        //custom snackbar thêm class vào để thay đổi màu sắc
        panelClass:['snackBar-custom']
      });
      return;
    }
    if (this.user.lastname == null || this.user.lastname == '') {
      this.snack.open("xin lỗi username không được để trống","X",{
        duration: 2000,
        verticalPosition:'top',
        horizontalPosition:"right",
        //custom snackbar thêm class vào để thay đổi màu sắc
        panelClass:['snackBar-custom']
      });
      return;
    }
    if (this.user.password == null || this.user.password == '') {
      this.snack.open("xin lỗi username không được để trống","X",{
        duration: 2000,
        verticalPosition:'top',
        horizontalPosition:"right",
        //custom snackbar thêm class vào để thay đổi màu sắc
        panelClass:['snackBar-custom']
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data) => {
        Swal.fire('Thành công', 'Đăng ký tài khoản thành công, bắt đầu ngay thôi nào!', 'success');
        this.router.navigate(['/login']);
      },
      (err) => {

        this.snack.open(err.error.message,"X",{
          duration: 2000,
          verticalPosition:'top',
          horizontalPosition:"right",
          //custom snackbar thêm class vào để thay đổi màu sắc
          panelClass:['snackBar-custom']
        });
      }
    );
  }
}
