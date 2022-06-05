import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AllianceComponent } from './alliance/alliance.component';
import { MetaComponent } from './meta/meta.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { GuidesComponent } from './guides/guides.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    AllianceComponent,
    MetaComponent,
    CalculatorsComponent,
    GuidesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
