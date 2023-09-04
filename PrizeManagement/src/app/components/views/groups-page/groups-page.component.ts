import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { GroupService } from 'src/app/services/group/group.service';
import { IGroup } from 'src/app/Models/IGroup';
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

  groupName: string | undefined;

  visible: boolean = true;

  sourceProducts!: Product[];

  targetProducts!: Product[];


  groupList !: IGroup[];

  constructor(private grpServ: GroupService) { }

  ngOnInit() {

    this.grpServ.getAllGroups().subscribe(data => {
      this.groupList = data
      console.log(this.groupList)
      for (const group of this.groupList) {
        console.log("group name " + group.groupName)
      }

      this.files = this.groupList.map(group => ({
        data: {
          name: group.groupName,
          date: group.createdDate,
          participants: 1
        },
      }));

    })

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

  registerGroup() {
    const requestBody = {
      "groupName": this.groupName,
      "date": this.date?.toISOString(),
    }

    this.grpServ.registerGroup(requestBody).subscribe(res => {
      console.log(res)
    })
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
    this.visible = true;
  }


}
