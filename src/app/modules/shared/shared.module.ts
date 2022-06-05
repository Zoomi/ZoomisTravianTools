import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CookieComponent } from './cookie/cookie.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { ImprintComponent } from './footer/imprint/imprint.component';
import { TermsComponent } from './footer/terms/terms.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CookieComponent,
    PrivacyComponent,
    ImprintComponent,
    TermsComponent
  ],
  exports: [
    CookieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
