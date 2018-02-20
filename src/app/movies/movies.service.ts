import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class MoviesService {

	private apiKey = 'e267a85018f963eb82d87dccbca42fbe'; // my private API key
	private url = 'https://api.themoviedb.org/3';

  constructor(private http: Http) { }

  getMovie(category: string): Observable<any> {
  	let params: URLSearchParams = new URLSearchParams();
		params.set('api_key', this.apiKey);

		let requestOptions = new RequestOptions();
		requestOptions.search = params;

    return this.http.get(this.url + `/movie/${category}`, requestOptions).map((response: Response) => 
      response.json()
    )
  }
}