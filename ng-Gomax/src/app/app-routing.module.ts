import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';

import {HomeComponent} from './site-layout/public/components/home/home.component';
import {PageNotFoundComponent} from './site-layout/public/components/page-not-found/page-not-found.component';
import {AdminAccueilComponent} from './admin-layout/admin-accueil/admin-accueil.component';


const routes: Routes = [
    {
      path: '',
      component: SiteLayoutComponent,
      children: [
        {path: '', component: HomeComponent, pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'films', loadChildren: './site-layout/modules/film/film.module#FilmModule'},
        {path: 'account', loadChildren: './site-layout/modules/myaccount/myaccount.module#MyaccountModule'}
      ]
    },
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
        {path: '', component: AdminAccueilComponent, pathMatch: 'full'},
        {path: 'admin', component: AdminAccueilComponent},
        {path: 'seance', loadChildren: './admin-layout/modules/show-admin/show-admin.module#ShowAdminModule'}
      ]
    },

    {path: '**', component: PageNotFoundComponent},
  ]
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
