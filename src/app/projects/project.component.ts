import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Project} from './project';
import {ProjectService} from './project.service';

import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
	templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
	@Input()
  project: Project;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route.params.switchMap(
       (params: Params) => this._projectService.getProject(params['id']))
        .subscribe(project => this.project = project);
       }

	goBack(): void {
		window.history.back();
	}

  gotoProjects() {
      let projectId = this.project ? this.project.id : null;
      this._router.navigate(
        ['/projects'], {queryParams: { id: projectId}}
      );
  }
}
