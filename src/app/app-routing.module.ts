import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuRoutingModule } from './pages/main-menu/main-menu-routing.module';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'main-menu', component: MainMenuComponent, loadChildren: () => MainMenuRoutingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
