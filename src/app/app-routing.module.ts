import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuRoutingModule } from './pages/main-menu/main-menu-routing.module';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ComicsComponent } from './pages/comics/comics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main-menu', component: MainMenuComponent, loadChildren: () => MainMenuRoutingModule },
  { path: 'contact', redirectTo: '/main-menu/contact'},
  { path: 'about', redirectTo: '/main-menu/about'},
  { path: 'comics', component: ComicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
