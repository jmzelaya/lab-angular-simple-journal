import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: any[] = [];

  constructor(
    private journalThang: JournalEntriesService
  ) { }

  ngOnInit() {
    this.journalThang.getEntries()
      .subscribe(
        (entriesFromApi: any[]) => {
          this.entries = entriesFromApi;
        }
      );
  }

}
