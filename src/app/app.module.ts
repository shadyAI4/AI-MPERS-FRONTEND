import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

//Import Layouts
import { FullComponent } from './shared/components/layouts/full/full.component';
import { BlankComponent } from './shared/components/layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './shared/components/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/layouts/full/header/header.component';
import { BrandingComponent } from './shared/components/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './shared/components/layouts/full/sidebar/nav-item/nav-item.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './modules/authentication/authentication-routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './services/auth.service';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AuthInterceptor } from './interceptors/auth-interceptors';
import { SystemUsersEffects } from './store/entities/usermanagement/system-user.effects';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    MaterialModule,
    NgHttpLoaderModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
    ApolloModule,
    EffectsModule.forRoot([
      SystemUsersEffects,
   ]),
   StoreModule.forRoot(reducers, { metaReducers }),


  ],
  exports: [TablerIconsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
   { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
   NgxPermissionsService,
    {
     provide: APP_INITIALIZER,
     useFactory: (auth: AuthService) => {
       return async () => {
         await auth.authRole();
       };
     },
     deps: [AuthService],
     multi: true,
   },
 ],
 bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    apollo:Apollo,
    httpLink: HttpLink,
  ){
    apollo.create({
      link:httpLink.create({ uri: 'http://localhost:7000/api'}),
      cache: new InMemoryCache()
    });
  }
}
