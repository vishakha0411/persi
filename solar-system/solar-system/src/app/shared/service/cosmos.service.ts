import { Injectable } from '@angular/core';
import { Data } from '../mock-data';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CosmosService {
  constructor() {}

  getData() {
    return of(Data);
  }
}

