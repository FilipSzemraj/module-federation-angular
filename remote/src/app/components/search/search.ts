import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'remote-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {

  constructor(private router: Router) {
    console.log("jestem w remote-search komponent, czyli ścieżka dla ''")
    console.log(router.url);
  }

  public icons = {
    history: '../../../assets/images/icons/history-icon.svg',
    motivizer: '../../../assets/images/icons/motivizer-icon.svg',
    profile: '../../../assets/images/icons/profile-icon.svg',
  };
}
