import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { DataService } from './services/data.service';
import { GithubService } from './services/github.service';

import { AppComponent } from './components/main/app.component';
import { GithubComponent } from './components/github/github.component';
import { MemberComponent } from './components/member/member.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegistrationComponent, MemberComponent, GithubComponent, HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'home',
        component: MemberComponent
      },
      {
        path: 'github',
        component: GithubComponent
      },
      {
        path: 'members',
        component: MemberComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      }
    ])
  ],
  providers: [DataService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
