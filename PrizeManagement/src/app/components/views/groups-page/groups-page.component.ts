import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { GroupService } from 'src/app/services/group/group.service';
import { IGroup } from 'src/app/Models/IGroup';
import { IITem } from 'src/app/Models/IITem';
import { ItemService } from 'src/app/services/item/item.service';
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

  sourceItems!: IITem[];

  targetItems!: IITem[];


  cols!: Column[];

  date: Date | undefined;

  groupName: string | undefined;

  visible: boolean = false;

  viewvisible: boolean = false;

  sourceProducts!: Product[];

  groupList !: IGroup[];


  selectedGroup !: IGroup;


  constructor(private grpServ: GroupService, private itemServ: ItemService) { }

  ngOnInit() {

    this.grpServ.getAllGroups().subscribe(data => {
      this.groupList = data
      console.log(this.groupList)

      this.files = this.groupList.map(group => ({
        data: {
          groupName: group.groupName,
          createdDate: group.createdDate,
          participants: 1,
          promotionGroupId: group.promotionGroupId
        },
      }));

    })

    this.cols = [
      { field: 'groupName', header: 'Name' },
      { field: 'createdDate', header: 'Date' },
      { field: 'participants', header: 'Participants' }
    ];

    this.populateItems();
  }

  registerGroup() {
    const ItemTargetIdList: number[] = this.targetItems.map(item => item.itemId)

    console.log(ItemTargetIdList)

    const requestBody = {
      "groupName": this.groupName,
      "date": this.date?.toISOString(),
      "itemsId": ItemTargetIdList
    }

    this.grpServ.registerGroup(requestBody).subscribe(res => {
      console.log(res)
    })

    this.visible = false;
  }


  populateItems() {
    this.itemServ.GetAllItems().subscribe(data => {
      this.sourceItems = data
    })

    this.targetItems = []
  }

  showDialog() {
    this.visible = true;
  }

  visualizeGroup(columnValue: IGroup) {
    this.selectedGroup = columnValue
    console.log(columnValue)
    console.log(this.selectedGroup)

    this.viewvisible = true;
  }




}
