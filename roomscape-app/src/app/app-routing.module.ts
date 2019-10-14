import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // Ya no existe{ path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  //ESTO NO SIRVE{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  // Ya no existe { path: 'map', loadChildren: './map/map.module#MapModule' },
  // Ya no existe { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },
  // Ya no existe { path: 'tab', loadChildren: './tab/tab.module#TabModule' },
  { path: 'complete', loadChildren: './complete/complete.module#CompleteModule' },
  //  Ya no existe { path: 'header', loadChildren: './header/header.module#HeaderModule' },
  { path: 'pop-up', loadChildren: './pop-up/pop-up.module#PopUpModule' },
  { path: 'saved', loadChildren: './saved/saved.module#SavedModule' },
  // No descomentar { path: 'map-page', loadChildren: './map-page/map-page.module#MapPagePageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // No descomentar { path: 'profile-page', loadChildren: './profile-page/profile-page.module#ProfilePagePageModule' },
  // No descomentar { path: 'filter-page', loadChildren: './filter-page/filter-page.module#FilterPagePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
