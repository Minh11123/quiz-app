import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from "sweetalert2";
import {LoginService} from "../../../services/login.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {UserService} from "../../../services/user.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {TestService} from "../../../services/test.service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  user :any;
  tests: any = [];
  constructor(
    private loginService: LoginService,
    private storage:AngularFireStorage,
    private userService: UserService,
    private router:Router,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    console.log("alo user: ", this.user);
    this.getTests(this.loginService.getUser().id);
  }

  getTests(id:any){
    this.testService.getTest(this.user.id).subscribe((data)=>{
      this.tests = data;
    },(error) =>{
      Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');
    });

  }

  delete(id:any){
    this.testService.deleteTest(id).subscribe(()=>{
      Swal.fire('Thành công', 'Update thành công!', 'success');
    },(error)=>{
      Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');
    });
  }

}
