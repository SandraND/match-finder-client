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
import { RecentGroupsComponent } from './components/recent-groups/recent-groups.component';
import { PlayersListPageComponent } from './pages/players-list-page/players-list-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';

import { AuthService } from './services/auth.service';
import { GroupService } from './services/group.service';
import { UserService } from './services/user.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceptedRequestCardComponent } from './components/accepted-request-card/accepted-request-card.component';
import { GroupsCardComponent } from './components/groups-card/groups-card.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameListAllComponent } from './components/game-list-all/game-list-all.component';
import { SearchGroupDetailComponent } from './components/search-group-detail/search-group-detail.component';
import { SearchUserDetailComponent } from './components/search-user-detail/search-user-detail.component';
import { AppliedGameCardComponent } from './components/applied-game-card/applied-game-card.component';
import { AppliedGameListComponent } from './components/applied-game-list/applied-game-list.component';
import { FriendListAllComponent } from './components/friend-list-all/friend-list-all.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';

import { FilterPipe } from './pipes/filter.pipe';


const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [ InitAuthGuard ]},
  {path: 'login', component: LoginPageComponent, canActivate: [ RequireAnonGuard ]},
  {path: 'signup', component: SignUpPageComponent, canActivate: [ RequireAnonGuard ]},
  {path: 'groups/add', component: CreateGroupPageComponent, canActivate: [ RequireUserGuard ]},
  {path: 'groups/search', component: SearchGroupPageComponent, canActivate: [ RequireUserGuard ]},
  {path: 'groups/:id/apply', component: SearchGroupDetailComponent, canActivate: [ RequireUserGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [ RequireUserGuard ]},
  {path: 'groups/:id', component: DetailGroupPageComponent, canActivate: [ RequireUserGuard ]},
  {path: 'games', component: ListGamesPageComponent, canActivate: [ RequireUserGuard ]},
  {path: 'groups', component: MyGroupsPageComponent, canActivate: [ RequireUserGuard ]},
  {path: 'groups/recent', component: RecentGroupsComponent, canActivate: [ RequireUserGuard ]},
  {path: 'players', component: PlayersListPageComponent, canActivate: [RequireUserGuard]},
  {path: 'players/:id', component: SearchUserDetailComponent, canActivate: [RequireUserGuard]},
  {path: 'friends', component: FriendsPageComponent, canActivate: [RequireUserGuard]},
  {path: '**', component: ErrorPageComponent}
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
    AcceptedRequestCardComponent,
    GroupsCardComponent,
    GameListComponent,
    GameListAllComponent,
    GameCardComponent,
    RecentGroupsComponent,
    FilterPipe,
    GameListAllComponent,
    SearchGroupDetailComponent,
    SearchGroupDetailComponent,
    PlayersListPageComponent,
    SearchUserDetailComponent,
    FriendsPageComponent,
    AppliedGameCardComponent,
    AppliedGameListComponent,
    FriendListAllComponent,
    FriendCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    GroupService,
    UserService,
    InitAuthGuard,
    RequireAnonGuard,
    RequireUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
