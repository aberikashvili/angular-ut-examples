import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loadAll(): Observable<any[]> {
    return this.http.get<any[]>(``)
      .pipe(
        map(data => data)
      );
  }

  loadById(): Observable<any> {
    return this.http.get(``)
      .pipe();
  }

  create(data: any): void {
    this.http.post(``, { data })
      .subscribe(response => {});
  }
}
