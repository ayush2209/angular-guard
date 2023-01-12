import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  private serviceVaribale = "Ayush Anand";

  public get name() {
    return this.serviceVaribale
  }
}
