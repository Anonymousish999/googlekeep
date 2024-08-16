import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private httpService: HttpService) {}
  access_token = localStorage.getItem('access_token');
  getAllNotesApiCall() {
    return this.httpService.getAPICall(
      `/notes/getNotesList?access_token=${this.access_token}`
    );
  }
}
