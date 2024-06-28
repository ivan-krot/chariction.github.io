import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotInformationComponent } from '../lot-information/lot-information.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LotInformationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search by lot name">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-lot-information></app-lot-information>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
