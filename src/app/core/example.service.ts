import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { CacheService } from './cache.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(
    private httpService: HttpService,
    private cacheService: CacheService
  ) {}

  // on first call data with be cached in memory
  gerRandomData() {
    let path = `users`;
    return this.httpService
      .get<any>(
        // url
        path
      )
      .pipe(
        tap((response) => {
          this.cacheService.set(path, response);
        })
      );
  }
}
