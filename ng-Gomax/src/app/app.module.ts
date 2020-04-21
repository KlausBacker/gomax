import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {AdminAccueilComponent} from './admin-layout/admin-accueil/admin-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    AdminAccueilComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
