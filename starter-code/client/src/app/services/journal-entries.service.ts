import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JournalEntriesService {

  baseUrl: string = 'http://localhost:3000';

  getEntries() {
    return this.httpThang.get(
      this.baseUrl + '/api/journal-entries'
    )
  }

  constructor(
    private httpThang: HttpClient
  ) { }

  getEntryDetails(entryId: string) {
    return this.httpThang.get(
      this.baseUrl + '/api/journal-entries/' + entryId
    );
  }

}
