import { Component } from '@angular/core';
import { SkillsComponent } from '../../skills/skills.component/skills.component';

@Component({
  selector: 'app-home',
  imports:[SkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }