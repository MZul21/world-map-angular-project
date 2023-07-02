import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.worldbank.org/v2/country/';
  countryName: string = '';
  countryCapital: string = '';
  countryRegion: string = '';
  incomeLevel: string = '';
  longitude: string = '';
  latitude: string = '';

  constructor(private http: HttpClient) {}

  getInfo(name: string): Observable<any> {
    const url = `${this.apiUrl}${name}?format=json`;
    return this.http.get(url);
  }

  getData(id: string): void {
      this.getInfo(id).subscribe(
        (data: any) => {
          this.countryName = data[1][0].name;
          this.countryCapital = data[1][0].capitalCity;
          this.countryRegion = data[1][0].region.value;
          this.incomeLevel = data[1][0].incomeLevel.value;
          this.longitude = data[1][0].longitude;
          this.latitude = data[1][0].latitude;
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  
}
