import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'add-menu',component:AddMenuComponent},
  {path: 'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
