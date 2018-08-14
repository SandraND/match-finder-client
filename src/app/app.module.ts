import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { CreateGroupPageComponent } from './pages/create-group-page/create-group-page.component';
import { SearchGroupPageComponent } from './pages/search-group-page/search-group-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DetailGroupPageComponent } from './pages/detail-group-page/detail-group-page.component';
import { ListGamesPageComponent } from './pages/list-games-page/list-games-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    CreateGroupPageComponent,
    SearchGroupPageComponent,
    ProfilePageComponent,
    DetailGroupPageComponent,
    ListGamesPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
