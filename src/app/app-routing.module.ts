import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent }   from './projects/projects.component';
import { SkillsComponent }      from './skills/skills.component';
import { ProjectComponent }  from './projects/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'skills',  component: SkillsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
