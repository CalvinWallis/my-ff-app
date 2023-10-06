import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { MenuItemDirective } from 'src/app/directives/menu-item.directive';
import { MenuService } from 'src/app/services/menu.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MenuItemDirective as MenuItemDirective_1 } from '../../directives/menu-item.directive';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RouterOutlet, MenuItemDirective_1, RouterLink, AsyncPipe, DatePipe]
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  @ViewChildren(MenuItemDirective) menuItems: QueryList<MenuItemDirective> = new QueryList<MenuItemDirective>;

  dateTime$?: Observable<Date>;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.dateTime$ = timer(0, 1000).pipe(
      map(() => {
        return new Date();
      })
    )
  }

  ngAfterViewInit() {
    this.menuService.setMenuItems(this.menuItems);
    this.menuService.subscribeToMenuNavigation();

    requestAnimationFrame(() => {
      this.menuItems.first.element.focus();
    })
  }


}
