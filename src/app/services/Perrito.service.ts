import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerritoService {
  constructor(private http: HttpClient) {}

  getDog() {
    let url = 'https://dog.ceo/api/breeds/image/random';
    return this.http.get(url);
  }
}
