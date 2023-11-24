import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from "../../match-card/match-card.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-live',
    standalone: true,
    templateUrl: './live.component.html',
    styleUrl: './live.component.css',
    imports: [CommonModule, MatchCardComponent,RouterOutlet, RouterModule]
})
export class LiveComponent implements OnInit{

  liveMatches:any

  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadLiveMatches();
  }



  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches=data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
