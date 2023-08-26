import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', url: '/home' },
      { label: 'Prizes', icon: 'pi pi-fw pi-gift', url: '/prizes' },
      { label: 'Groups', icon: 'pi pi-fw pi-users', url: '/groups' },
    ];

    // this.activeItem = this.items[];
  }


  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
  }

}
