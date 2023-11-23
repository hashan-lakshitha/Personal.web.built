import { SkillsComponent } from './pageComponent/skills/skills.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pageComponent/navbar/navbar.component';
import { MainHomeComponent } from './pageComponent/main-home/main-home.component';
import { SocialMediaComponent } from './pageComponent/social-media/social-media.component';
import { ExampleComponent } from './pageComponent/example/example.component';
import { AboutComponent } from './pageComponent/about/about.component';
import { FooterComponent } from './pageComponent/footer/footer.component';
import { ProjectComponent } from './pageComponent/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHomeComponent,
    SocialMediaComponent,
    ExampleComponent,
    AboutComponent,
    FooterComponent,
    ProjectComponent,
    SkillsComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
