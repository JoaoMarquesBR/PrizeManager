import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}

export interface Prize {
  name: string;
  price: number;
  winrate: number;
}

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}


@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})

export class GroupsPageComponent implements OnInit {
  files!: TreeNode[];

  sourcePrize!: Prize[];

  cols!: Column[];

  date: Date | undefined;

  visible: boolean = false;

  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor() { }

  ngOnInit() {
    this.files = [
      {
        data: { name: '2022 Summer Camp', date: '10/03/2023', participants: 20 },
      },
      {
        data: { name: 'School Trip', date: '05/15/2023', participants: 30 },
      },
      {
        data: { name: 'Birthday Party', date: '08/20/2023', participants: 15 },
      },
      {
        data: { name: 'Family Gathering', date: '11/05/2023', participants: 12 },
      },
      {
        data: { name: 'Community Event', date: '09/18/2023', participants: 50 },
      },
      {
        data: { name: 'Playdate Group', date: '07/10/2023', participants: 8 },
      },
      {
        data: { name: 'After-School Club', date: '12/12/2023', participants: 25 },
      },
      {
        data: { name: 'Team Building', date: '06/25/2023', participants: 40 },
      },
      {
        data: { name: 'Holiday Celebration', date: '12/24/2023', participants: 18 },
      },
      {
        data: { name: 'Scout Troop', date: '04/02/2023', participants: 22 },
      },
    ];

    this.sourcePrize = [
      {
        name: '10000 Arcade Credits', price: 10, winrate: 40
      },
      { name: 'Membership Cards', price: 50, winrate: 5 },
      { name: '1 Hour Arcade Pass', price: 15, winrate: 60 },
      { name: 'Trampoline Jumping Session', price: 12, winrate: 75 },
      { name: 'Combo Package (Arcade + Trampoline)', price: 25, winrate: 50 },
      { name: 'VIP Membership', price: 150, winrate: 10 },
      { name: 'Arcade Prize Tickets (1000)', price: 5, winrate: 30 },
      { name: 'Trampoline Party Package', price: 200, winrate: 20 },
      { name: 'Family Fun Pass (Arcade + Trampoline)', price: 60, winrate: 45 },
      { name: 'Arcade Game Tokens (50)', price: 8, winrate: 55 },
    ];


    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'date', header: 'Date' },
      { field: 'participants', header: 'Participants' }
    ];

    this.populateItems();
  }


  populateItems() {
    this.sourceProducts = [
      {
        id: '1',
        code: 'PROD001',
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 19.99,
        quantity: 100,
        inventoryStatus: 'In Stock',
        category: 'Category A',
        image: 'product1.jpg',
        rating: 4.5
      },
      {
        id: '2',
        code: 'PROD002',
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 29.99,
        quantity: 50,
        inventoryStatus: 'Low Stock',
        category: 'Category B',
        image: 'product2.jpg',
        rating: 3.8
      },
      {
        id: '3',
        code: 'PROD003',
        name: 'Product 3',
        description: 'Description of Product 3',
        price: 39.99,
        quantity: 80,
        inventoryStatus: 'In Stock',
        category: 'Category C',
        image: 'product3.jpg',
        rating: 4.2
      },
      {
        id: '4',
        code: 'PROD004',
        name: 'Product 4',
        description: 'Description of Product 4',
        price: 49.99,
        quantity: 30,
        inventoryStatus: 'Low Stock',
        category: 'Category A',
        image: 'product4.jpg',
        rating: 3.7
      },
      {
        id: '5',
        code: 'PROD005',
        name: 'Product 5',
        description: 'Description of Product 5',
        price: 59.99,
        quantity: 60,
        inventoryStatus: 'In Stock',
        category: 'Category B',
        image: 'product5.jpg',
        rating: 4.0
      }
    ];


    this.targetProducts = []
  }

  showDialog() {
    console.log("hi")
    this.visible = true;
  }


}
