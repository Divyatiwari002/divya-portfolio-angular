import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get<Project[]>('/assets/projects.json').subscribe(p=>this.projects = p);
  }
}