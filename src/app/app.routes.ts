import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component/contact.component';
import { HomeComponent } from './components/home/home.component/home.component';
import { ProjectsComponent } from './components/projects/projects.component/projects.component';
import { AboutComponent } from './components/about/about.component/about.component';


export  const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

