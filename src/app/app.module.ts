import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { RouteHandlerModule } from './core/route-handler/route-handler.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { CommonService } from './shared/services/common.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'homekitts' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    LocalStorageModule.withConfig({prefix: environment.localStorage.prefix, storageType: 'localStorage'}),
    AppRoutingModule,
    CoreModule,
    PagesModule,
    RouteHandlerModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    CommonService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
