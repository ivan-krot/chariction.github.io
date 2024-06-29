import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LotComponent } from "./lot/lot.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Chariction - Home Page",
    },
    {
        path: 'lot/:id',
        component: LotComponent,
        title: "Chariction - Lot details",
    }
];

export default routeConfig;