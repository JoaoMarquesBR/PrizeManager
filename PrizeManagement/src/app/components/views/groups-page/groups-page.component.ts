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

  originalSourceItems!: IITem[];

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

      this.files = this.groupList.map(group => ({
        data: {
          groupName: group.groupName,
          createdDate: group.createdDate,
          participants: group.participants,
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
      this.originalSourceItems = data
    })

    this.targetItems = []
  }

  showDialog() {
    this.visible = true;
    this.targetItems = []
    this.sourceItems = this.originalSourceItems

  }

  editGroup(columnValue: IGroup) {
    this.selectedGroup = columnValue


    //pushing from the original List we can get the values that were not populated in the HTML page.
    let originalGroupSelected = this.groupList.find(x => x.promotionGroupId == this.selectedGroup.promotionGroupId)


    this.targetItems = originalGroupSelected?.itemList || []
    this.sourceItems = this.originalSourceItems

    this.sourceItems = this.sourceItems.filter(sourceItem =>
      !this.targetItems.some(targetItem => targetItem.itemId === sourceItem.itemId)
    );

    this.viewvisible = true;
  }

  updateGroup() {

    const requestBody = {
      "groupId": this.selectedGroup.promotionGroupId,
      "groupName": this.selectedGroup.groupName,
      "itemsId": this.targetItems.map(x => x.itemId)
    }
    this.grpServ.updateGroup(requestBody).subscribe(res => {
      console.log(res)
    })

    this.viewvisible = false;

  }



}
