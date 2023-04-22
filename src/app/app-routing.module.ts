import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainMenuRoutingModule } from './pages/main-menu/main-menu-routing.module';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: MainMenuComponent, loadChildren: () => MainMenuRoutingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
