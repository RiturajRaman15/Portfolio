import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./mycomponents/home/home.component";
import {ProjectsComponent} from "./mycomponents/projects/projects.component";
import {SkillsComponent} from "./mycomponents/skills/skills.component";
import {ExperiencesComponent} from "./mycomponents/experiences/experiences.component";
import {AchievementsComponent} from "./mycomponents/achievements/achievements.component";
import {SocialProfilesComponent} from "./mycomponents/social-profiles/social-profiles.component";
import {EducationComponent} from "./mycomponents/education/education.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experience', component: ExperiencesComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'contact', component: SocialProfilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
