import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service/http.service';
import { NotesService } from '../services/notes-service/notes.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  notesList: any = [];

  @Input() searchText: string = '';

  constructor(private notesService: NotesService, private dataService : DataService) {}

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall("getNotesList").subscribe({
      next: (r: any) => {
        this.notesList = r.data.data;
        this.notesList = this.notesList.filter((i:any)=>{
          return i.isArchived==false && i.isDeleted==false;
        })
        console.log('result is: ', this.notesList);
      },
      error: (e) => {},
    });

    this.dataService.currentData.subscribe((data) => {
      this.searchText = data;
    });
  }
}
