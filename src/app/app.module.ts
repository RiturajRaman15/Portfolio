import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './mycomponents/nav/nav.component';
import {HomeComponent} from './mycomponents/home/home.component';
import {AchievementsComponent} from './mycomponents/achievements/achievements.component';
import {SkillsComponent} from './mycomponents/skills/skills.component';
import {ProjectsComponent} from './mycomponents/projects/projects.component';
import {SocialProfilesComponent} from './mycomponents/social-profiles/social-profiles.component';
import {ExperiencesComponent} from './mycomponents/experiences/experiences.component';
import {NgOptimizedImage} from "@angular/common";
import { EducationComponent } from './mycomponents/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AchievementsComponent,
    SkillsComponent,
    ProjectsComponent,
    SocialProfilesComponent,
    ExperiencesComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
