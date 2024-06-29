import { Injectable } from '@angular/core';
import { LotInformation } from './lot-information';

@Injectable({
  providedIn: 'root'
})
export class LotsService {
  protected lotInformationList: LotInformation[] = [
    {
      "id": 1,
      "image": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "title": "Lot1 title",
      "description": "Liot description string",
      "startprice": 1000,
      "currency": "UAH",
      "isGroup": false,
      "startDate": new Date(2024, 5, 29),
      "endDate": new Date(2024, 7, 29),
      "owner": "Valtechies",
      "owner_id": 1
    },
    {
      "id": 2,
      "image": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "title": "Lot2 title",
      "description": "Lot description string 2",
      "startprice": 5000,
      "currency": "EUR",
      "isGroup": true,
      "startDate": new Date(2024, 5, 29),
      "endDate": new Date(2024, 7, 29),
      "owner": "Share Dare Care",
      "owner_id": 2
    }
  ]
  constructor() { }

  getAllLots() : LotInformation [] {
    return this.lotInformationList;
  }

  getLotById(id: Number) : LotInformation | undefined {
    return this.lotInformationList.find(lotInformation => lotInformation.id === id);
  }
}
