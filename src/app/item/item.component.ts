import { Component, OnInit, Input } from '@angular/core';
import { Item } from './itemClass';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  constructor() { }
  @Input() itemData;
  ngOnInit() {
  }
}
