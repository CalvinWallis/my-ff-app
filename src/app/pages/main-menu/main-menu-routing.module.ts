import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from 'src/app/components/party/party.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path: '', component: PartyComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent, pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
