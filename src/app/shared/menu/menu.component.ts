import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string,
  name: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      route: '/graphics/bars',
      name: 'Bars'
    },
    {
      route: '/graphics/double-bars',
      name: 'Double Bars'
    },
    {
      route: '/graphics/donut',
      name: 'Donut'
    },
    {
      route: '/graphics/donut-http',
      name: 'Donut Http'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
