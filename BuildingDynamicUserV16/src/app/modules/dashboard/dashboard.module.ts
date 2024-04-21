import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserCardComponent } from './components/userslist/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserslistComponent,
    UserDetailsComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,FormsModule,
    NgbModule
  ]
})
export class DashboardModule { }
