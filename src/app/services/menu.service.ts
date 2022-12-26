import { Injectable, OnDestroy, QueryList } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuItemDirective } from '../directives/menu-item.directive';
import { KeyboardService } from './keyboard.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {
  #subscriptions: Subscription = new Subscription();
  menuNavigationStarted: boolean = false;
  menuItems: BehaviorSubject<QueryList<MenuItemDirective>> = new BehaviorSubject<QueryList<MenuItemDirective>>(new QueryList<MenuItemDirective>());

  constructor(private keyboardService: KeyboardService) { }

  subscribeToMenuNavigation() {
    if(!this.menuNavigationStarted){
      this.#subscriptions.add(
        this.keyboardService.observeArrowKeys().subscribe((result) => {
          const items = this.menuItems.getValue().toArray();
          const key = (result as KeyboardEvent).key;
          let activeIndex = items.findIndex(
            (element) => element.element === document.activeElement
          );
          if (key === 'ArrowUp' && activeIndex > 0) {
            activeIndex--;
          } else if (key === 'ArrowDown' && activeIndex < items.length - 1) {
            activeIndex++;
          }
          items[activeIndex].element.focus();
        })
      );    

      this.menuNavigationStarted = true;
    }
  }

  setMenuItems(menuItems: QueryList<MenuItemDirective>): void {
    this.menuItems.next(menuItems);
  }

  

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
