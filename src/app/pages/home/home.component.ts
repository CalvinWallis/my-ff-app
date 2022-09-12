import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MenuItemDirective } from 'src/app/directives/menu-item.directive';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren(MenuItemDirective) menuItems: QueryList<MenuItemDirective> = new QueryList<MenuItemDirective>;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit(): void {    
    this.keyboardService.observeArrowKeys().subscribe((result) => {
      const items = this.menuItems.toArray();
      const key = (result as KeyboardEvent).key;
      let activeIndex = items.findIndex(element => element.element === document.activeElement);
      if(key === 'ArrowUp' && activeIndex > 0) {
        activeIndex--;
      }
      else if(key === 'ArrowDown' && activeIndex < items.length - 1){
        activeIndex++;
      }
      items[activeIndex].element.focus();
    })
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.menuItems.first.element.focus();
    });
  }

  focusItem(event: Event) {
    const target = event.target as HTMLElement;
    target.focus();
  }
}
