import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
datax=[1,2,3,4,];
  constructor(public http: HttpClient) {

  }

}
