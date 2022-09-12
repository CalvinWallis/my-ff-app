import { Injectable, OnDestroy } from '@angular/core';
import { filter, fromEvent, map, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService implements OnDestroy {
  subscription: Subscription = new Subscription();
  arrowEvents = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];

  observeArrowKeys() {
    return fromEvent(document, 'keydown').pipe(
      filter((keyEvent) =>
        this.arrowEvents.includes((keyEvent as KeyboardEvent).key)
      )
    );
  }

  destroy() {
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
