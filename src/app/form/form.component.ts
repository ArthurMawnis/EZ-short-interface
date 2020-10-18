/**
 * @author Arthur Freitas, arthurMawnis on Github
 *
 */
import { Component, OnInit } from '@angular/core';

import { ShortenUrlService } from './../services/shorten-url.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  /**User choosen url */
  originalUrl: string;
  /**New Url shortened by the server, acessing this will redirect the user to the original resource */
  shortedUrl: string;

  constructor(private service: ShortenUrlService) {}

  ngOnInit(): void {}

  /**Request a shortened Url from the given one.
   *
   */
  shortendGivenUrl() {
    this.service
      .doShortenUrl({
        url: this.originalUrl,
      })
      .subscribe((data) => (this.shortedUrl = data.url));
  } //TODO add error handling
}
