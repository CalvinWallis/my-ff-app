import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MenuItemDirective } from './directives/menu-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomeComponent,
    MainMenuComponent,
    MenuItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
