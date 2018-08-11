import {Component, NgZone, OnInit} from '@angular/core';
import {SearchService} from '../../service/search/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInputValue: string;

  constructor(private searchService: SearchService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  searchRecipient() {
    // const navigation = this.router.navigate(['/search-recipient'], {queryParams: { fullName: this.searchInputValue }});
    this.zone.runOutsideAngular(() => this.router.navigate(['/search-recipient'], {queryParams: { fullName: this.searchInputValue }}));
    /*this.searchService.searchRecipient(this.searchInputValue).subscribe(data => {
      console.log(data);

    });*/
  }
}
