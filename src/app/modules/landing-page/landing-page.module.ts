import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { NewsComponent } from './news/news.component';
import { DonationComponent } from './donation/donation.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    NewsComponent,
    DonationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
