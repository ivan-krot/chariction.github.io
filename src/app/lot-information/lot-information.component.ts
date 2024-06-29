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
      <img [src]="lotInformation.image" alt="Exterior photo of {{lotInformation.title}}" class="listing-photo">
      <h2 class="listing-heading">{{lotInformation.title}}</h2>
      <div class="listing-information">
        <span class="lot-id">Lot ID: {{lotInformation.id}}</span>
        <span class="lot-price">Current price: tbd</span>
        <span class="lot-end-date">{{lotInformation.endDate}}</span>
      </div>
      <div class="buttonns-block">
        <a [routerLink]="['lot/', lotInformation.id]">Read more</a>
        <button class="raise">Raise</button>
      </div>
    </section>
  `,
  styleUrls: ['./lot-information.component.css']
})
export class LotInformationComponent {
  @Input() lotInformation!: LotInformation;
}
