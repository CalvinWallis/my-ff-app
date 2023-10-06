import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MenuItemDirective } from 'src/app/directives/menu-item.directive';
import { MenuService } from 'src/app/services/menu.service';
import { ContainerComponent } from '../../components/container/container.component';
import { RouterLink } from '@angular/router';
import { MenuItemDirective as MenuItemDirective_1 } from '../../directives/menu-item.directive';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        MenuItemDirective_1,
        RouterLink,
        ContainerComponent,
    ],
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren(MenuItemDirective) menuItems: QueryList<MenuItemDirective> = new QueryList<MenuItemDirective>;

  constructor(private menuService: MenuService) { }

  ngAfterViewInit() {
    this.menuService.setMenuItems(this.menuItems);
    this.menuService.subscribeToMenuNavigation();

    requestAnimationFrame(() => {
      this.menuItems.first.element.focus();
    })
  }
}
