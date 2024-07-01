import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LotInformation } from '../lot-information';
import { LotsService } from '../lots.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      <form [formGroup]="applyForm" (submit)="submitApplicationForm()">
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email:</label>
        <input id="email" type="text" formControlName="email">

        <button type="submit" class="primary">Submit Form</button>
      </form>
    </section> 
    </article>
  `,
  styleUrls: ['./lot.component.css']
})
export class LotComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  lotService = inject(LotsService);
  lotInformation: LotInformation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor () {
    const lotInformationId = Number(this.route.snapshot.params["id"])
    //this.lotInformation = this.lotService.getLotById(lotInformationId)
    this.lotService.getLotById(lotInformationId).then(lotInformation => {
      this.lotInformation = lotInformation;
    });
  }
  submitApplicationForm() {
    this.lotService.submitApplicationForm(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}
