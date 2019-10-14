import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { 
        path: 'map-page', 
        loadChildren: '../map-page/map-page.module#MapPagePageModule' 
      },
      { 
        path: 'profile-page', 
        loadChildren: '../profile-page/profile-page.module#ProfilePagePageModule' 
      },
      { 
        path: 'filter-page', 
        loadChildren: '../filter-page/filter-page.module#FilterPagePageModule' 
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/map-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
