/**
 * @author Arthur Freitas, arthurMawnis on Github
 *
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlTemplate } from './../url-template';

@Injectable({
  providedIn: 'root',
})
export class ShortenUrlService {
  //TODO externalize resources
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  doShortenUrl(requestInput: Object): Observable<UrlTemplate> {
    return this.http.post<UrlTemplate>(this.baseUrl, requestInput);
  }
}
