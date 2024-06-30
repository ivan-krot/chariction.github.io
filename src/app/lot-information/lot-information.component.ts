import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotInformation } from '../lot-information';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lot-information',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
    <a [routerLink]="['lot/', lotInformation.id]" class="main-image">
      <img [src]="lotInformation.image" alt="Exterior photo of {{lotInformation.title}}" class="listing-photo">
    </a>
      <h2 class="listing-heading">{{lotInformation.title}}</h2>
      <ul class="listing-information">
        <li class="lot-id">Lot ID: {{lotInformation.id}}</li>
        <li class="lot-price">Current price: tbd</li>
        <li class="lot-end-date">End date: {{lotInformation.endDate}}</li>
      </ul>
      <div class="buttonns-block">
        <a [routerLink]="['lot/', lotInformation.id]">Read more</a>
        <button class="primary raise">Raise</button>
      </div>
    </section>
  `,
  styleUrls: ['./lot-information.component.css']
})
export class LotInformationComponent {
  @Input() lotInformation!: LotInformation;
}
