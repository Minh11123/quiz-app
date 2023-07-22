import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";
import {ifError} from "assert";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-level-doc-view-update-categories',
  templateUrl: './view-category-document.html',
  styleUrls: ['./view-category-document.css']
})
export class ViewCategoryDocument implements OnInit {

  categories:any = [

  ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private loginService: LoginService
  ) {}
  type:any;

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.queryParams['type'];
    if (this.type === "level1"){
      this.type = 1;
    }
    if (this.type === "level2"){
      this.type = 2;
    }
    this.categoryService.categories().subscribe((categories)=>{
      this.categories = categories;
    },
    (err)=>{
      Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
      this.loginService.logout();
    }

    )
  }

}
