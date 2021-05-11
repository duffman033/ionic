import { Component, OnInit } from '@angular/core';
import {DataService} from '../tools/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list = new DataService().getList();
  constructor() {
  }

  ngOnInit() {
  }

}
