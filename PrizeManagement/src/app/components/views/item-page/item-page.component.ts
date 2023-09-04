import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { IITem } from 'src/app/Models/IITem';
import { ItemService } from 'src/app/services/item/item.service';


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

  name: string = "";

  price: number = 0.00;

  visible: boolean = false;

  itemList !: IITem[];


  constructor(private itemServ: ItemService) { }

  ngOnInit() {

    this.itemServ.GetAllItems().subscribe(data => {
      this.itemList = data

      for (const item of this.itemList) {
        console.log("group name " + item.itemId + "  " + item.name + " " + item.price)
      }

      this.files = this.itemList.map(item => ({
        data: {
          name: item.name,
          price: item.price,
          itemId: item.itemId
        },
      }));

    })


    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'price', header: 'Price' },
      { field: 'winrate', header: 'Win Rate' }
    ];
  }

  registerItem() {
    console.log(this.price)
    console.log(this.name)

    const requestBody = {
      "itemName": this.name,
      "price": this.price
    }

    this.itemServ.registerItem(requestBody).subscribe(resp => {
      console.log(resp)
    });

  }

  showDialog() {
    this.visible = true;
  }


}
