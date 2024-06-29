import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LotInformation } from '../lot-information';
import { LotsService } from '../lots.service';

@Component({
  selector: 'app-lot',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
    <img class="listing-photo" [src]="lotInformation?.image">
    <section class="listing-description lot-description">
      <h2 class="listing-heading lot-title">{{lotInformation?.title}}</h2>
      <p class="listing-location lot-description">{{lotInformation?.description}}</p>
    </section>
    <section class="listing-features lot-additional-info">
      <h2 class="section-heading">Additional information about this Lot</h2>
      <ul>
        <li>Group lot: {{lotInformation?.isGroup}}</li>
        <li>Lot provided by: {{lotInformation?.owner}}</li>
        <li>Initial price: {{lotInformation?.startprice}} </li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Ready to bid more ?</h2>
      <button class="primary">Raise price</button>
      <a href="https://send.monobank.ua/jar/5GDiCGtwBs" class="donate">Donate</a>
    </section> 
    </article>
  `,
  styleUrls: ['./lot.component.css']
})
export class LotComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  lotService = inject(LotsService);
  lotInformation: LotInformation | undefined;

  constructor () {
    const lotInformationId = Number(this.route.snapshot.params["id"])
    this.lotInformation = this.lotService.getLotById(lotInformationId)
  }
}
