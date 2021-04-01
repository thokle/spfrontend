import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  IgxBottomNavModule,
  IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule, IgxDropDownModule,
  IgxIconModule,
  IgxInputGroupModule, IgxListModule, IgxNavbarModule,
  IgxNavigationDrawerModule, IgxRadioComponent, IgxRadioModule,
  IgxRippleModule, IgxSelectModule,
  IgxToggleModule
} from 'igniteui-angular';
import {RouterModule, Routes} from '@angular/router';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { FrontComponent } from './front/front.component';
import { ClubComponent } from './club/club.component';
import { ActivityComponent } from './activity/activity.component';
import {LoginGuard} from './login.guard';
import {ClubGuard} from './club.guard';
import {HttpClientModule} from '@angular/common/http';
import {MemberService} from './services/member.service';
import {SessionService} from './services/session.service';
import {OwnerService} from './services/owner.service';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { ListClubsComponent } from './list-clubs/list-clubs.component';
import {ClubService} from './services/club.service';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import {ActivityService} from './services/activity.service';
import {MatDialogModule} from '@angular/material/dialog';
import { ActivityDialogComponent } from './activity-dialog/activity-dialog.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import {MatMenuModule} from '@angular/material/menu';
import { VideoComponent } from './video/video.component';
import { ShopComponent } from './shop/shop.component';
import { UserShopComponent } from './user-shop/user-shop.component';
import { MemberActivityComponent } from './member-activity/member-activity.component';
import { ShopItemDialogComponent } from './shop-item-dialog/shop-item-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { ClubMembersComponent } from './club-members/club-members.component';
import { ImportMembersComponent } from './import-members/import-members.component';

const routes: Routes = [

  {path: 'memberdashboard', component: MemberDashboardComponent, children: [
    {path: 'addCreditCard', component: CreditcardComponent, outlet: 'user'},
    {path: 'addusertoActivity' , component: ActivityComponent, outlet: 'user'},
      {path: 'uservideo', component: VideoComponent, outlet: 'user'},
      {path: 'shop', component: UserShopComponent, outlet: 'user'},
      {path : 'memberActivity', component: MemberActivityComponent, outlet: 'user'}
      ]},
  {path: 'ownerdashboard', component: OwnerDashboardComponent},
  {path: 'createowner', component: OwnerComponent},
  {path: 'createmember', component: CreateMemberComponent},
  {path: 'login', component: LoginComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    LoginComponent,
    CreateMemberComponent,
    FrontComponent,
    ClubComponent,
    ActivityComponent,
    OwnerComponent,
    OwnerDashboardComponent,
    CreateActivityComponent,
    ListClubsComponent,
    MemberDashboardComponent,
    ActivityDialogComponent,
    CreditcardComponent,
    VideoComponent,
    ShopComponent,
    UserShopComponent,
    MemberActivityComponent,
    ShopItemDialogComponent,
    UserProfileComponent,
    PlayerScoreComponent,
    ClubMembersComponent,
    ImportMembersComponent
  ],
  imports: [

    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    FormsModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxToggleModule,
    IgxRadioModule,
    RouterModule,
    HttpClientModule,
    IgxListModule,
    IgxSelectModule,
    IgxNavbarModule,
    IgxCheckboxModule,
    MatDialogModule,
    IgxDialogModule,
    IgxDatePickerModule,
    IgxDropDownModule,
    MatMenuModule,
    IgxBottomNavModule,
    MatSnackBarModule

  ],
  providers: [MemberService, SessionService, OwnerService, ClubService, ActivityService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
