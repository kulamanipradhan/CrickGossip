import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {

  pointTable: any
  tableHeading: any
  constructor(private _api: ApiCallService) {


  }
  ngOnInit(): void {
    this.LoadPointTable();
  }


  private LoadPointTable() {
    this._api.getPointTable().subscribe({
      next: data => {
        console.log(data);
        this.pointTable = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
