import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuDefinition: any;

  menuItems: MenuItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = this.transformDefinition(this.menuDefinition);
  }

  private transformDefinition(menuDefinition: any[]): MenuItem[] {
    const items = this.convertArraytoItems(menuDefinition);
    return this.convertItemsToMenuItems(items);
  }

  private convertArraytoItems(objects: any[], parent?: any): any {
    const items = [];
    objects.forEach(element => {
      items.push(this.convertObjectToItems(element, parent));
    });
    return items;
  }

  private convertObjectToItems(object, parent?: any): any {
    let item: any = {};
    if (object.data) {
      item = object.data;
      item.route = object;
      delete item.route.data;
    } else {
      item.route = object;
      item.skip = true;
    }

    item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
    item.route.paths.push(item.route.path);

    if (object.children && object.children.length > 0) {
      item.children = this.convertArraytoItems(object.children, item);
    }

    item.url = this.router.createUrlTree(item.route.paths).toString();
    item.hidden = false;
    return item;
  }

  private convertItemsToMenuItems(items: any[]): MenuItem[] {
    const menu: MenuItem[] = [];
    items.forEach(item => {
      let menuItem;
      if (item.skip) {
        if (item.children && item.children.length > 0) {
          menuItem = item.children.map(element => {
            return { url: element.url, title: element.title, icon: element.icon, hidden: element.hidden };
          });
        }
      } else {
        menuItem = { url: item.url, title: item.title, icon: item.icon, hidden: item.hidden };
      }

      if (menuItem) {
        menu.push(menuItem);
      }
    });

    return [].concat.apply([], menu);
  }
}
