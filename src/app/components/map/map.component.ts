import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {

  constructor(public api: ApiService) {}
  

  idEvent(idSent: string) {
    this.api.getData(idSent);
  }

  clear() {
    this.api.countryName = "";
    this.api.countryCapital = "";
    this.api.countryRegion = "";
    this.api.incomeLevel = "";
    this.api.longitude = "";
    this.api.latitude = "";
  }
}
