import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';


interface Column {
  field: string;
  header: string;
}



@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  files!: TreeNode[];

  cols!: Column[];

  price: number = 0.00;

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
    this.files = [
      {
        data: { name: '10000 Arcade Credits', price: 10, winrate: 40 },
      },
      {
        data: { name: 'Membership Cards', price: 50, winrate: 5 },
      },
      {
        data: { name: '1 Hour Arcade Pass', price: 15, winrate: 60 },
      },
      {
        data: { name: 'Trampoline Jumping Session', price: 12, winrate: 75 },
      },
      {
        data: { name: 'Combo Package (Arcade + Trampoline)', price: 25, winrate: 50 },
      },
      {
        data: { name: 'VIP Membership', price: 150, winrate: 10 },
      },
      {
        data: { name: 'Arcade Prize Tickets (1000)', price: 5, winrate: 30 },
      },
      {
        data: { name: 'Trampoline Party Package', price: 200, winrate: 20 },
      },
      {
        data: { name: 'Family Fun Pass (Arcade + Trampoline)', price: 60, winrate: 45 },
      },
      {
        data: { name: 'Arcade Game Tokens (50)', price: 8, winrate: 55 },
      },
      // Add more items as needed
    ];
    console.log(this.files)

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'price', header: 'Price' },
      { field: 'winrate', header: 'Win Rate' }
    ];
  }

  showDialog() {
    console.log("hi")
    this.visible = true;
  }


}
