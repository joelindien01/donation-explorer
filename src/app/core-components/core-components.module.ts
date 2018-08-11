import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search/search.component';
import {RecipientSimpleViewComponent} from './recipient-simple-view/recipient-simple-view.component';
import {ProfileContainerComponent} from './profile-container/profile-container.component';
import {HistoricComponent} from './historic/historic.component';
import {FormsModule} from '@angular/forms';
import { SearchResultContainerComponent } from './search-result-container/search-result-container.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'search-recipient', component: SearchResultContainerComponent },
  { path: 'test', component: SearchResultContainerComponent },
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: false } // <-- debugging purposes only
    )
  ],
  declarations: [
    SearchComponent,
    RecipientSimpleViewComponent,
    ProfileContainerComponent,
    HistoricComponent,
    SearchResultContainerComponent
  ],
  exports: [
    SearchComponent,
    RecipientSimpleViewComponent,
    ProfileContainerComponent,
    HistoricComponent,
    SearchResultContainerComponent,
    RouterModule
  ]
})
export class CoreComponentsModule { }
