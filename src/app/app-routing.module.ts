import { FilterPagesComponent } from './Pages/filter-pages/filter-pages.component';
import { HomeComponent } from './Pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { UserInfoComponent } from './Pages/user-info/user-info.component';


const routes: Routes = [

  {path: "", component: UserInfoComponent},
  {path: "home", component: HomeComponent},
  {path: "filter-pages/:type", component: FilterPagesComponent},
  {path: "filter-pages/:type/:id/:index", component: FilterPagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
