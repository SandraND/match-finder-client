import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { CreateGroupPageComponent } from './pages/create-group-page/create-group-page.component';
import { SearchGroupPageComponent } from './pages/search-group-page/search-group-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DetailGroupPageComponent } from './pages/detail-group-page/detail-group-page.component';
import { ListGamesPageComponent } from './pages/list-games-page/list-games-page.component';
import { MyGroupsPageComponent } from './pages/my-groups-page/my-groups-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceptedRequestCardComponent } from './components/accepted-request-card/accepted-request-card.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignUpPageComponent},
  {path: 'groups/add', component: CreateGroupPageComponent},
  {path: 'groups/search', component: SearchGroupPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'groups/:id', component: DetailGroupPageComponent},
  {path: 'games', component: ListGamesPageComponent},
  {path: 'groups', component: MyGroupsPageComponent}
];

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
    ListGamesPageComponent,
    MyGroupsPageComponent,
    ErrorPageComponent,
    NavbarComponent,
    AcceptedRequestCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
