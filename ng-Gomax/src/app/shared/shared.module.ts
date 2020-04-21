import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {NgPipesModule} from 'ngx-pipes';

import {HeaderComponent} from '../site-layout/public/components/header/header.component';
import {NavigationComponent} from '../site-layout/public/components/navigation/navigation.component';
import {FooterComponent} from '../site-layout/public/components/footer/footer.component';
import {HomeComponent} from '../site-layout/public/components/home/home.component';
import {PageNotFoundComponent} from '../site-layout/public/components/page-not-found/page-not-found.component';

import {AdminHeaderComponent} from '../admin-layout/admin-header/admin-header.component';
import {AdminNavigationComponent} from '../admin-layout/admin-navigation/admin-navigation.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent, NavigationComponent, AdminHeaderComponent, AdminNavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgPipesModule,

  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,

    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgPipesModule,
    AdminHeaderComponent,

  ],
})

export class SharedModule {
}
