import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";
import {ifError} from "assert";

@Component({
  selector: 'app-level-doc-view-update-categories',
  templateUrl: './level-doc-view-update-categories.html',
  styleUrls: ['./level-doc-view-update-categories.css']
})
export class LevelDocViewUpdateCategories implements OnInit {

  categories:any = [

  ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
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
      Swal.fire("error!!","serve error loading data","error");
    }

    )
  }

}
