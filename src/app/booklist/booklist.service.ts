import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class bookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private constructor(private http: HttpClient) { }

  getBook(name: string): Observable<any> {
    return this.http.get(this.baseUrl + name);
  }


}