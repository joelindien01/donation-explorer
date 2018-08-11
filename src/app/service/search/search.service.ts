import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchUrl = '/search';

  constructor(private httpClient: HttpClient) { }

  searchRecipient(searchInputValue: string) {
    let params = new HttpParams();
    params = params.append('fullName', searchInputValue);
    return this.httpClient.get(this.searchUrl, {params: params});
  }

}
