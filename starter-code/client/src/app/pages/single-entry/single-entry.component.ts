import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entryInfo: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private journalThang: JournalEntriesService,
    private routerThang: Router

  ) { }

  ngOnInit() {
    this.activatedThang.params
      .subscribe(
        (myParams) => {
            this.journalThang.getEntryDetails(myParams.entryId)
              .subscribe(
                  (theEntryFromApi) => {
                    this.entryInfo = theEntryFromApi;
          }
        );
    });
  }

}
