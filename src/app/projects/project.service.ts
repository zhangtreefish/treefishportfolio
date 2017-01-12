import { Project } from './project';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ProjectService {
    private projectsUrl = 'app/projects';  // URL to web api

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
        .toPromise()
        .then(response => response.json().data as Project[])
        .catch(this.handleError);
    };

    // getProject(id: string) {
    //     return this.getProjects()
    //     .then(projects => projects.find(project => project.id===id));
    // };
    getProject(id: number): Promise<Project> {
      const url = `${this.projectsUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Project)
        .catch(this.handleError);
    }

    delete(project: Project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.projectsUrl}/${project.id}`;

        return this.http
             .delete(url, {headers: headers})
             .toPromise()
             .catch(this.handleError);
    }

    save(project: Project): Promise<Project>  {
        if (project.id) {
            return this.put(project);
        }
        return this.post(project);
    }

    // Add new Project
    private post(project: Project): Promise<Project> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.projectsUrl, JSON.stringify(project), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    };

    // Update existing Project
    private put(project: Project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.projectsUrl}/${project.id}`;

        return this.http
             .put(url, JSON.stringify(project), {headers: headers})
             .toPromise()
             .then(() => project)
             .catch(this.handleError);
    };
}

