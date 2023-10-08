import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { MenuItemDirective } from './directives/menu-item.directive';
import { ExperienceBarComponent } from './components/experience-bar/experience-bar.component';
import { PartyMemberComponent } from './components/party-member/party-member.component';
import { AboutComponent } from './pages/about/about.component';
import { PartyComponent } from './components/party/party.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContainerComponent,
        HomeComponent,
        MainMenuComponent,
        MenuItemDirective,
        ExperienceBarComponent,
        PartyMemberComponent,
        AboutComponent,
        PartyComponent,
        ContactComponent,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
