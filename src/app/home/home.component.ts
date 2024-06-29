import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotInformationComponent } from '../lot-information/lot-information.component';
import { LotInformation } from '../lot-information';
import { LotsService } from '../lots.service';

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
      <app-lot-information *ngFor="let lotInformation of lotInformationList" [lotInformation]="lotInformation"></app-lot-information>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  lotInformationList: LotInformation[] = [];
  lotsService: LotsService = inject(LotsService);

  constructor() {
    this.lotInformationList = this.lotsService.getAllLots();
  }
}
