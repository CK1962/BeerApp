import { Component, OnInit } from '@angular/core';
import { IBeer } from "../ibeer";
import { BeerService } from "../beer.service";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit
{
  beerList: IBeer[] = [];
  displayedColumns: string[] = ["name", "tagline", "first_brewed"];

  constructor(private BeerService: BeerService,
    private AuthService: AuthService,
    private router: Router) {}

  ngOnInit()
  {
    this.BeerService.getAll().subscribe(data => (this.beerList = data));
  }

  logout(){
    this.AuthService.logout();
    this.router.navigateByUrl("login");
  }
}

