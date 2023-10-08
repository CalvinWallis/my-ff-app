import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  #comicEndpoint: string = 'https://personal-site-api-git-main-calvinwallis.vercel.app/comics'

  constructor(private http: HttpClient) { }

  getPage(comic: string, volume: string, page: string): Observable<GetComicResponse> {

    let params = new HttpParams();

    params = params.appendAll({
      'comic': comic,
      'volume': volume,
      'page': page
    });

    return this.http.get<GetComicResponse>(this.#comicEndpoint, { params: params});
  }
}

export interface GetComicResponse {
  data: {
    url: string
  }
}

