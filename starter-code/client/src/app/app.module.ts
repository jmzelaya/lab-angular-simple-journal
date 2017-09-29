import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { JournalEntriesService } from './services/journal-entries.service';
import { AppComponent } from './app.component';
import { EntryListComponent } from './pages/entry-list/entry-list.component';
import { SingleEntryComponent } from './pages/single-entry/single-entry.component';

const myRoutes: Routes = [
  {path: '', component: EntryListComponent },
  {path: 'journal-entries/:entryId', component: SingleEntryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [
    JournalEntriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
