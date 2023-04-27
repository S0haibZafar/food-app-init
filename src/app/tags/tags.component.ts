import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTage?:string[];
  tagData?: Tag[] = [];

  constructor(private fs : FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTage){
      this.tagData = this.fs.getAllTags();
    }
  }

}
