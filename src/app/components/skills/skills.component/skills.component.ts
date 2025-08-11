import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
  <div class="card">
    <h3>Skills</h3>
    <div class="grid">
      <div class="card" style="padding:12px">.NET C#</div>
      <div class="card" style="padding:12px">Angular</div>
      <div class="card" style="padding:12px">JavaScript / TypeScript</div>
      <div class="card" style="padding:12px">SQL</div>
      <div class="card" style="padding:12px">Azure</div>
    </div>
  </div>
  `
})
export class SkillsComponent {}