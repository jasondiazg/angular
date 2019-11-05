import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ChuckNorrisJoke, ChuckNorrisJokes, Category } from '../entities/entities';

@Injectable()
export class ChuckNorrisService {

  constructor(public http: HttpClient) { }

  /**
  * Get random chuck norris joke
  * @returns {Observable<ChuckNorrisJoke>} RequestData
  */
  getRandomJoke(): Observable<ChuckNorrisJoke> {
    return this.http.get<any>(`${environment.apis[`ChuckNorrisApi`]}/random`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  /**
  * Get categories
  * @returns {Observable<string[]>} RequestData
  */
  getCategories(): Observable<string[]> {
    return this.http.get<any>(`${environment.apis[`ChuckNorrisApi`]}/categories`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  /**
  * Get random joke by category
  * @param {string} category
  * @returns {Observable<ChuckNorrisJoke>} RequestData
  */
  getRandomJokeByCategory(category: string): Observable<ChuckNorrisJoke> {
    return this.http.get<any>(`${environment.apis[`ChuckNorrisApi`]}/random?category=${category}`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  /**
  * Get jokes by query
  * @param {string} query
  * @returns {Observable<ChuckNorrisJokes>} RequestData
  */
  getJokesByQuery(query: string): Observable<ChuckNorrisJokes> {
    return this.http.get<any>(`${environment.apis[`ChuckNorrisApi`]}/search?query=${query}`)
      .pipe(
        map(response => response),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }
}