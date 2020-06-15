import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  breeds = ["Afador", "Affenhuahua", "Affenpinscher", "Afghan Hound", "Airedale Terrie", "Akbash", "American Eskimo Dog", "Bassador", "Basset Fauve", "de Bretagne", "Basset Hound", "Beabull", "Jerman Shephered", "Bulldog", "Dobberman"];

}
