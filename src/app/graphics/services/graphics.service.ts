import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  apiUrl:string = 'http://localhost:3000/grafica';

  constructor(private http: HttpClient) { }

  getCantUsers() {
    return this.http.get(this.apiUrl);
  }

  getCantUsersData() {
    return this.getCantUsers()
      .pipe(
        map( data => {
            return  {
              keys: Object.keys(data),
              values: Object.values(data)
            }
            }
          )
      )
  }
}
