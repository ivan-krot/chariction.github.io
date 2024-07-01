import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotInformationComponent } from '../lot-information/lot-information.component';
import { LotInformation } from '../lot-information';
import { LotsService } from '../lots.service';
import { FormsModule } from '@angular/forms';
//import { title } from 'process';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LotInformationComponent, FormsModule],
  template: `
    <section>
      <form (submit)="filterResults(filter.value)">
        <input type="text" placeholder="Search by lot name" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-lot-information *ngFor="let lotInformation of filteredLotInformationList" [lotInformation]="lotInformation"></app-lot-information>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  lotInformationList: LotInformation[] = [];
  filteredLotInformationList: LotInformation[] = [];
  lotsService: LotsService = inject(LotsService);

  constructor() {
    
    this.lotsService.getAllLots().then((lotInformationList: LotInformation[]) => {
      this.lotInformationList = lotInformationList;
      this.filteredLotInformationList = lotInformationList;
    })
  }

  filterResults(text: string) {
    // if (!text) this.filteredLotInformationList = this.lotInformationList;

    this.filteredLotInformationList = this.lotInformationList.filter(
      lotInformation => lotInformation?.title.toLowerCase().includes(text.toLowerCase())
    ).concat(this.lotInformationList.filter(
      lotInformation => lotInformation?.description.toLowerCase().includes(text.toLowerCase())
    )).concat(this.lotInformationList.filter(
      lotInformation => lotInformation?.id.toString().toLowerCase().includes(text.toLowerCase())
    )).concat(this.lotInformationList.filter(
      lotInformation => lotInformation?.owner.toLowerCase().includes(text.toLowerCase())
    ))

    this.filteredLotInformationList = this.filteredLotInformationList.filter((value, index) => {
      const tmpValue = JSON.stringify(value);
      return index === this.filteredLotInformationList.findIndex(obj => {
        return JSON.stringify(obj) === tmpValue;
      });
    });
  }
}
