import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/api/comments';

  constructor(private http: HttpClient) {}

  addComment(comment: {content: string}): Observable<any> {
    return this.http.post(this.apiUrl, comment);
  }

  getComments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
