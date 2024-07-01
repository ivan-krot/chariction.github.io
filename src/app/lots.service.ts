import { Injectable } from '@angular/core';
import { LotInformation } from './lot-information';

@Injectable({
  providedIn: 'root'
})
export class LotsService {
  url = "http://localhost:3000/lots"

  constructor() { }

  async getAllLots() : Promise<LotInformation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [{
            "id": 0,
            "image": "/assets/lots_images/default_placeholder/logo_with_text_large.png",
            "title": "🤘🏻 Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet Спеціально до аукціону популярний український рок-гурт KOZAK SYSTEM підписав прапор із лого Valtech 🇺🇦 Ви можете знати KOZAK SYSTEM. Superhumans 🦾",
            "startprice": 950.55,
            "currency": "USD",
            "isGroup": true,
            "startDate": "2024, 5, 29",
            "endDate": "2024, 5, 29",
            "owner": "Test Lot",
            "owner_id": 333
          }];
    // for (let lot of this.lotInformationList) {
      
    //   // put placeholder image in case if image was NOT provided
    //   if (lot.image == "") {
    //     lot.image = "/assets/lots_images/default_placeholder/logo_with_text_large.png"
    //   }
    // }
    // return this.lotInformationList;
  }

  async getLotById(id: Number) : Promise<LotInformation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {
      "id": 0,
      "image": "/assets/lots_images/default_placeholder/logo_with_text_large.png",
      "title": "🤘🏻 Lorem ipsum dolor sit amet",
      "description": "Lorem ipsum dolor sit amet Спеціально до аукціону популярний український рок-гурт KOZAK SYSTEM підписав прапор із лого Valtech 🇺🇦 Ви можете знати KOZAK SYSTEM. Superhumans 🦾",
      "startprice": 950.55,
      "currency": "USD",
      "isGroup": true,
      "startDate": "2024, 5, 29",
      "endDate": "2024, 5, 29",
      "owner": "Test Lot",
      "owner_id": 333
    };
  }

  submitApplicationForm(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email)
  }
}
