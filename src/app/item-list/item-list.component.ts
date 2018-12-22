import { Component, OnInit } from '@angular/core';
import { itemArray } from './item-storage';
import { Item } from '../item/itemClass';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[] = itemArray;

  constructor() { }

  ngOnInit() {
  }

}
