import { Component, OnInit } from '@angular/core';

import {SkillService} from './skills.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css'],
	providers: [SkillService]
})
export class SkillsComponent implements OnInit {
	skills: String[];
	constructor(
		private _skillService: SkillService,
		private _router: Router,
    	private _route: ActivatedRoute) {}

	ngOnInit() {
		this.skills = this._skillService.getSkills();
	}
	goResume() {
		 window.location.href='http://zhangtreefish.github.io/Project-2-for-Front-End-Web-Developer-Nanodegree/';
	}
}
