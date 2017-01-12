import {Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import {Http, Response} from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectComponent} from './project.component';
import {Project} from './project';
//import { AutoGrowDirective } from './auto-grow.directive';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  	selector: 'my-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	frontEndProjects: Project[];
	fullStackProjects: Project[];
	private selectedId: string;

	constructor(
		private _projectService: ProjectService,
		private _router: Router,
    	private _route: ActivatedRoute) {}

	ngOnInit() {
		this.getProjects();
		this.getProject(this.selectedId);
	}

    getProjects() {
           	this._projectService.getProjects().then(projects => {
				this.frontEndProjects = projects
					.filter(project => project.genre === 'front end');
				this.fullStackProjects = projects
					.filter(project => project.genre === 'full stack');
      	});
    }
    getProject(id: string) {};

	// ngOnDestroy() {
	// this._subscr.unsubscribe();
	// }

	isSelected(project: Project) { return project.id === this.selectedId; }

	onClick(project: Project) {
		this._router.navigate(['/projects', project.id]);
	}
}
